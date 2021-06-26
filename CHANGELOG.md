# Unreleased changes

[Full changelog](https://github.com/mozilla-rally/core-addon/compare/v1.3.2...master)

* [#656](https://github.com/mozilla-rally/rally-core-addon/pull/656): Pre-format manifest.json in a way AMO likes, to work around AMO bug.
* [#653](https://github.com/mozilla-rally/rally-core-addon/pull/653): Bump rally.js version to 0.7.0
* [#651](https://github.com/mozilla-rally/rally-core-addon/pull/651): Pass Rally ID during core-check response, for use by glean in studies.

# v1.3.2 (2021-06-08)

[Full changelog](https://github.com/mozilla-rally/core-addon/compare/v1.3.1...v1.3.2)

* [#624](https://github.com/mozilla-rally/rally-core-addon/pull/624): Update the `income` field to use the key `exactIncome`; update `metrics.yaml` to change `income` to `exact_income` of type `quantity`.
* [#636](https://github.com/mozilla-rally/rally-core-addon/pull/636): Remove undefined values from demographic survey submission.
* [#643](https://github.com/mozilla-rally/rally-core-addon/pull/643): Update the CITP study id to `princeton-news-study@rally.mozilla.org`.

# v1.3.1 (2021-05-20)

[Full changelog](https://github.com/mozilla-rally/core-addon/compare/v1.3.0...v1.3.1)

* [#610](https://github.com/mozilla-rally/rally-core-addon/pull/610): Downgrade protocol, not working on taskcluster.

# v1.3.0 (2021-05-19)

[Full changelog](https://github.com/mozilla-rally/core-addon/compare/v1.2.1...v1.3.0)

* [#555](https://github.com/mozilla-rally/rally-core-addon/pull/555): Update the income question in the demographic survey to take in an integer.
* [#601](https://github.com/mozilla-rally/rally-core-addon/pull/601): Enable submitting data with Glean in addition to the legacy collection.

# v1.2.1 (2021-04-27)

[Full changelog](https://github.com/mozilla-rally/core-addon/compare/v1.2.0...v1.2.1)

* [#558](https://github.com/mozilla-rally/rally-core-addon/pull/558): Fetch the schema namespace from remote-settings, and use for study-specific enrollment and deletion pings.
* [#550](https://github.com/mozilla-rally/rally-core-addon/pull/550): Do not use the extension ID as the schema namespace. Re-use the "keyId" argument for this since it is redundant.
* [#532](https://github.com/mozilla-rally/rally-core-addon/pull/532): Log the payload to console when data collection is disabled, for QA purposes.
* [#547](https://github.com/mozilla-rally/rally-core-addon/pull/547): Update copy by changing "partner" to "collaborator".
# v1.2.0 (2021-04-12)

[Full changelog](https://github.com/mozilla-rally/core-addon/compare/v1.1.0...v1.2.0)

* [#529](https://github.com/mozilla-rally/rally-core-addon/pull/529): Implement the RS01 consent content.
* [#295](https://github.com/mozilla-rally/rally-core-addon/pull/295): Enable watching the repository and a better developer workflow using `npm run watch`.
* [#505](https://github.com/mozilla-rally/rally-core-addon/pull/505): Integrate Glean.js (disabled by default) and provide a way to enable it, as a developer, using the `config-enable-glean` option.

# v1.1.0 (2021-03-10)

[Full changelog](https://github.com/mozilla-rally/core-addon/compare/v1.0.0...v1.1.0)

* [#457](https://github.com/mozilla-rally/rally-core-addon/pull/457): Integrate color palette for study categories.
* [#400](https://github.com/mozilla-rally/rally-core-addon/pull/400):  Changes the "Manage Profile" flow to redirect back to the "Current Studies" page after update.
* [#486](https://github.com/mozilla-rally/rally-core-addon/pull/486): Properly report the `deletionId` in the enrollment ping.

# v1.0.0 (2021-03-09)

[Full changelog](https://github.com/mozilla-rally/core-addon/compare/v0.10.0...v1.0.0)

* [#432](https://github.com/mozilla-rally/rally-core-addon/pull/432): Add additional `target="_blank"` and `rel="noopener noreferrer"` to external links.
* [#434](https://github.com/mozilla-rally/rally-core-addon/pull/434): Change "will" to "may" in the "leave rally" modal copy.
* [#436](https://github.com/mozilla-rally/rally-core-addon/pull/436/): Change wording on demographic survey to "race / ethnicity".
* [#435](https://github.com/mozilla-rally/rally-core-addon/pull/435): Remove waitlist link from non-US add-on splash page.
* [#443](https://github.com/mozilla-rally/rally-core-addon/pull/443): Prepare for release:
  * enable data submission;
  * change the website URL to `rally.mozilla.org`;
* [#453](https://github.com/mozilla-rally/rally-core-addon/pull/453): Send deletion ID in uninstall URL, to handle deletion pings when add-on is removed directly.

# v0.10.0 (2021-02-19)

[Full changelog](https://github.com/mozilla-rally/core-addon/compare/v0.9.0...v0.10.0)

* [#431](https://github.com/mozilla-rally/rally-core-addon/pull/431): change displayed add-on name to Mozilla Rally.
* [#386](https://github.com/mozilla-rally/rally-core-addon/pull/386): add remote-controllable "pause" state for studies.
* [#398](https://github.com/mozilla-rally/rally-core-addon/pull/398): Use shorter name for core add-on, for UI display purposes.
* [#392](https://github.com/mozilla-rally/rally-core-addon/pull/392): Implement the new consent logic to prevent running side-loaded studies.
* [#403](https://github.com/mozilla-rally/rally-core-addon/pull/403): Support opening the Rally control panel from the Rally website through the `open-rally` custom event.
* [#417](https://github.com/mozilla-rally/rally-core-addon/pull/417): Add `rel="noopener noreferrer"` to `a` tags with `target="_blank"`.
* [#407](https://github.com/mozilla-rally/rally-core-addon/pull/407): Update the study card background parallax to be a fixed height.
* [#419](https://github.com/mozilla-rally/rally-core-addon/pull/419): Update the "leave rally" and "leave this study" modal copy.
* [#383](https://github.com/mozilla-rally/rally-core-addon/pull/383): Add IRB consent notice into the Core Add-On.

* Core-Addon
  * [#376](https://github.com/mozilla-rally/rally-core-addon/pull/376): Updates Core Add-On privacy notice to include note about collecting basic health metrics.

# v0.9.0 (2021-02-09)

[Full changelog](https://github.com/mozilla-rally/core-addon/compare/v0.8.0...v0.9.0)

* [#318](https://github.com/mozilla-rally/rally-core-addon/pull/311): Use Remote Settings for fetching study metadata.
* [#328](https://github.com/mozilla-rally/rally-core-addon/pull/328): Update demographic survey to use "Latinx"; list answers for race question 4 alphabetically.
* [#334](https://github.com/mozilla-rally/rally-core-addon/pull/334): Make Mocha stricter about unhandled exceptions in tests; fix the enable data submission option.
 * [341](https://github.com/mozilla-rally/rally-core-addon/pull/341): Update options page favicon, toolbar icon, and addon image to use the new Rally branding.
* [#344](https://github.com/mozilla-rally/rally-core-addon/pull/344): Create splash page for non-US users in the Core Add-On.
* [#286](https://github.com/mozilla-rally/core-addon/pull/286): Adds a "clear this response" button to demographic survey questions.
* [#349](https://github.com/mozilla-rally/core-addon/pull/349): Adds a "manage profile" page, where a user can update their demographic survey answers.
* [#350](https://github.com/mozilla-rally/rally-core-addon/pull/350): Simplify study schema for the remote settings, and make code consistent with new names.
* [#361](https://github.com/mozilla-rally/rally-core-addon/pull/361): Implements a new study card design.
* [#362](https://github.com/mozilla-rally/rally-core-addon/pull/362): Adds redirect to "sorry to see you go" page when user uninstalls Rally.
* [#363](https://github.com/mozilla-rally/rally-core-addon/pull/363): Adds an arrow flourish to the first run welcome page.

# v0.8.0 (2021-02-01)

[Full changelog](https://github.com/mozilla-rally/core-addon/compare/v0.7.1...v0.8.0)

* Core-Addon
  * [#294](https://github.com/mozilla-rally/core-addon/pull/294): Only process messages from known, installed studies. Additionally rename `ionInstalled` to `studyInstalled`.
  * [#301](https://github.com/mozilla-rally/core-addon/pull/301): Correctly report the zip code in the demographics survey.
  * [#298](https://github.com/mozilla-rally/core-addon/pull/298): Disable Rally on locales other than `en-US`. The ` --config-disable-locale-check` build option allows overriding the check for developer workflows on other locales.
  * [#305](https://github.com/mozilla-rally/core-addon/pull/305): Disable data submission to enable safer QA.
* `rally.js`
  * [#306](https://github.com/mozilla-rally/core-addon/pull/306): Add a developer mode. When enabled it allows developer to dump the content of pings to the browser console and prevents the Rally information page to be opened if no core-addon is found.

# v0.7.1 (2021-01-13)

[Full changelog](https://github.com/mozilla-rally/core-addon/compare/v0.7.0...v0.7.1)

* Core-Addon
  * [#299](https://github.com/mozilla-rally/core-addon/pull/299): Change the link to the sample Rally demo addon.

# v0.7.0 (2021-01-11)

[Full changelog](https://github.com/mozilla-rally/core-addon/compare/v0.6.1...v0.7.0)

* Core-Addon
  * [#237](https://github.com/mozilla-rally/core-addon/pull/237): Remove reliance on the Firefox Pioner ID pref.
  * **Breaking change** - [#262](https://github.com/mozilla-rally/core-addon/pull/262): rename the org from `mozilla-ion` to `mozilla-rally`. Without this change the core add-on won't be able to communicate with the test website.
  * [#271](https://github.com/mozilla-rally/core-addon/pull/271): drop or change references to `Ion` in the codebase. This additionally changes the add-on id to `rally-core@mozilla.org`.
  * **Breaking change** - [#282](https://github.com/mozilla-rally/core-addon/pull/282): listen for messages from the Rally staging site vs. the github.io site.
  * [#283](https://github.com/mozilla-rally/core-addon/pull/283): Copy only the needed font files used by the core add-on; copy only the `woff2` versions.
  * [#288](https://github.com/mozilla-rally/core-addon/pull/288) Fix a bug where studies are not displayed after the first time the option page was opened.
  * [#285](https://github.com/mozilla-rally/core-addon/pull/285) & [#290](https://github.com/mozilla-rally/core-addon/pull/290): Update the "how it works" and "FAQ" links to point to the corresponding staging site pages.
* `rally.js`
  * **Breaking change** - [#262](https://github.com/mozilla-rally/core-addon/pull/262): rename the org from `mozilla-ion` to `mozilla-rally`. Without this change no communication with the core add-on is possible.
  * [#269](https://github.com/mozilla-rally/core-addon/pull/269): Allow using the Rally.js support library without a bundler.

# v0.6.1 (2020-12-09)

[Full changelog](https://github.com/mozilla-rally/core-addon/compare/v0.6.0...v0.7.0)

* Added this changelog file.
* The data collected from the demographic survey is being submitted to the Rally servers.
* The full onboarding flow is now complete.
