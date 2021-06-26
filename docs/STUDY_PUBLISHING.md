# Study Extension Publishing

Study extensions are unprivileged and hosted on addons.mozilla.org, and should follow the same experience as a normal third-party add-on.
This is documented in more detail in the [study-template repositry](https://github.com/mozilla-rally/study-template/blob/main/README.md#publishing-a-study).

## Update RemoteSettings Server

The Rally Core extension checks the Firefox RemoteSettings server for a list of the currently-approved studies.

For local testing, see: https://github.com/mozilla-rally/core-addon#building-and-testing-a-study-locally
There is also a RemoteSettings dev server you may use for local testing / QA: https://remote-settings.readthedocs.io/en/latest/tutorial-dev-server.html

Updates to the staging and production RemoteSettings servers must receive sign off. The current reviewers are @knowtheory, @rhelmer, and @Dexterp37.

You can find an example of the expected JSON output of the RemoteSettings in the [locally-available-studies.json](https://github.com/mozilla-rally/rally-core-addon/blob/master/public/locally-available-studies.json) file of the core add-on repository. Note that this file must conform to the [studies-schema.json](https://github.com/mozilla-rally/rally-core-addon/blob/master/public/studies-schema.json) in the same repository.

The JSON may be edited directly, but since the RemoteSettings server is aware of the above schema, a simple HTML form may be used instead.
Reviewers will automatically receive an email when review is requested.

If you have any questions or problems, #delivery in Slack should be able to help.
