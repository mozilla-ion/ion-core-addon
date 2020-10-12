/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const Storage = require("./Storage.js");

// The path of the embedded resource used to control Ion options.
const ION_OPTIONS_PAGE_PATH = "public/index.html";

module.exports = class IonCore {
  constructor() {
    this._storage = new Storage();
  }

  initialize() {
    // Whenever the addon icon is clicked, open the control page.
    browser.browserAction.onClicked.addListener(this._openControlPanel);
    // After installing the addon, make sure to show the control page.
    browser.runtime.onInstalled.addListener(async ({ reason, temporary }) => {
      if (reason !== "install") {
        // We're only showing this when the addon is installed!
        return;
      }
      this._openControlPanel();
    });

    // Listen for messages from the options page.
    browser.runtime.onMessage.addListener(
      (m, s) => this._handleMessage(m, s));
  }

  _openControlPanel() {
    browser.runtime.openOptionsPage().catch(e => {
      console.error(`IonCore.js - Unable to open the control panel`, e);
    });
  }

  /**
   * Handles messages coming in from the options page.
   *
   * @param {Object} message
   *        The payload of the message.
   * @param {runtime.MessageSender} sender
   *        An object containing informations about who sent
   *        the message.
   * @returns {Promise} The response to the received message.
   *          It can be resolved with a value that is sent to the
   *          `sender`.
   */
  _handleMessage(message, sender) {
    // We only expect messages coming from the embedded options page
    // at this time. Discard anything else and report an error.
    if (sender.url != browser.runtime.getURL(ION_OPTIONS_PAGE_PATH)) {
      return Promise.reject(
        new Error("IonCore - received message from unexpected sender"));
    }

    switch (message.type) {
      case "enrollment": {
        // Let's not forget to respond `true` to the sender: the UI
        // is expecting it.
        return this._enroll().then(r => true);
      } break;
      case "study-enrollment": {
        // Let's not forget to respond `true` to the sender: the UI
        // is expecting it.
        return this._enrollStudy(message.data.studyID).then(r => true);
      } break;
      case "unenrollment": {
        return this._unenroll().then(r => true);
      } break;
      default:
        return Promise.reject(
          new Error(`IonCore - unexpected message type ${message.type}`));
    }
  }

  /**
   * Enroll in the Ion platform.
   *
   * This sets up all the required information (e.g. Ion ID)
   * and sets the relevant data to the pipeline.
   *
   * @returns {Promise} A promise resolved when the enrollment
   *          is complete (does not block on data upload).
   */
  async _enroll() {
    // Generate a proper random UUID.
    const uuid = await browser.firefoxPrivilegedApi.generateUUID();

    // Store it locally for future use.
    await this._storage.setIonID(uuid);

    // The telemetry API, before sending a ping, reads the
    // ion id from a pref. It no value is set, the API will
    // throw and nothing will be sent. This means, at enrollment,
    // we need set the value of that required pref.
    await browser.firefoxPrivilegedApi.setIonID(uuid);

    // Finally send the ping.
    await this._sendEnrollmentPing();
  }

  /**
   * Enroll in an Ion Study.
   *
   * This sends the required pings,
   *
   * @returns {Promise} A promise resolved when the enrollment
   *          is complete (does not block on data upload).
   */
  async _enrollStudy(studyAddonId) {
    // TODO: Validate the study id?

    // Record that user activated this study.
    await this._storage.appendActivatedStudy(studyAddonId);

    // Finally send the ping.
    await this._sendEnrollmentPing(studyAddonId);
  }

  /**
   * Unenroll from the Ion platform.
   *
   * This clears all the stored data (e.g. Ion ID)
   * and sends the relevant deletion requests to the pipeline.
   *
   * @returns {Promise} A promise resolved when the unenrollment
   *          is complete (does not block on data upload).
   */
  async _unenroll() {
    // Read the list of the studies user activated throughout
    // their stay on the Ion platform and send a deletion request
    // for each of them.
    let studyList = await this._storage.getActivatedStudies();
    for (let studyId of studyList) {
      await this._sendDeletionPing(studyId);
    }

    // Clear locally stored Ion ID.
    await this._storage.clearIonID();

    // The telemetry API, before sending a ping, reads the
    // ion id from a pref. We're good to clear this after sending
    // the deletion pings.
    await browser.firefoxPrivilegedApi.clearIonID();

    // Finally clear the list of studies user took part in.
    await this._storage.clearActivatedStudies();
  }

  /**
   * Sends an empty Ion ping with the provided info.
   *
   * @param {String} payloadType
   *        The type of the encrypted payload. This will define the
   *        `schemaName` of the ping.
   *
   * @param {String} namespace
   *        The namespace to route the ping. This will define the
   *        `schemaNamespace` and `studyName` properties of the ping.
   */
  async _sendEmptyPing(payloadType, namespace) {
    let options = {
      studyName: namespace,
      addPioneerId: true,
      // NOTE - while we're not actually sending useful data in
      // this payload, the current Ion v2 Telemetry pipeline requires
      // that pings are shaped this way so they are routed to the correct
      // environment.
      //
      // At the moment, the public key used here isn't important but we do
      // need to use *something*.
      encryptionKeyId: "discarded",
      publicKey: {
        crv: "P-256",
        kty: "EC",
        x: "XLkI3NaY3-AF2nRMspC63BT1u0Y3moXYSfss7VuQ0mk",
        y: "SB0KnIW-pqk85OIEYZenoNkEyOOp5GeWQhS1KeRtEUE",
      },
      schemaName: payloadType,
      schemaVersion: 1,
      // Note that the schema namespace directly informs how data is
      // segregated after ingestion.
      // If this is an enrollment ping for the pioneer program (in contrast
      // to the enrollment to a specific study), use a meta namespace.
      schemaNamespace: namespace,
    };

    // For enrollment, we expect to send an empty payload.
    const payload = {};

    // We intentionally don't wait on the promise returned by
    // `submitExternalPing`, because that's an internal API only meant
    // for telemetry tests. Moreover, in order to send a custom schema
    // name and a custom namespace, we need to ship a custom "experimental"
    // telemetry API for legacy telemetry.
    await browser.firefoxPrivilegedApi
      .submitEncryptedPing("pioneer-study", payload, options)
      .then(() => {
        console.debug(`IonCore._sendEnrollmentPing - options: ${JSON.stringify(options)} payload: ${JSON.stringify(payload)}`);
      })
      .catch(error => {
        console.error(`IonCore._sendEnrollmentPing failed - error: ${error}`);
      });
  }

  /**
   * Sends a Pioneer enrollment ping.
   *
   * The `creationDate` provided by the telemetry APIs will be used as the
   * timestamp for considering the user enrolled in pioneer and/or the study.
   *
   * @param {String} [studyAddonid=undefined]
   *        optional study id. It's sent in the ping, if present, to signal
   *        that user enroled in the study.
   */
  async _sendEnrollmentPing(studyAddonId) {
    // If we were provided with a study id, then this is an enrollment to a study.
    // Send the id alongside with the data and change the schema namespace to simplify
    // the work on the ingestion pipeline.
    if (typeof studyAddonId != "undefined") {
      return await this._sendEmptyPing("pioneer-enrollment", studyAddonId);
    }

    // Note that the schema namespace directly informs how data is segregated after ingestion.
    // If this is an enrollment ping for the pioneer program (in contrast to the enrollment to
    // a specific study), use a meta namespace.
    return await this._sendEmptyPing("pioneer-enrollment", "pioneer-meta");
  }

  /**
   * Sends a Ion deletion-request ping.
   *
   * @param {String} studyAddonid
   *        It's sent in the ping to signal that user unenrolled from a study.
   */
  async _sendDeletionPing(studyAddonId) {
    if (typeof studyAddonId === undefined) {
      throw new Error("IonCore - the deletion-request ping requires a study id");
    }

    return await this._sendEmptyPing("deletion-request", studyAddonId);
  }
}
