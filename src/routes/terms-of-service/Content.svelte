<script>
  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

  import { fly } from "svelte/transition";

  export let onboarding = true;
</script>

<style>
  h3 {
    font-size: 24px;
    margin-bottom: 8px;
    margin-top: 2em;
    font-family: "Zilla Slab", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol";
  }

  p, div, li {
    letter-spacing: -.01em;
  }

  h4 {
    font-size: 16px;
    margin-bottom: 4px;
    margin-top: 0;
    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol";
  }
  h2,
  h3,
  h4 {
    color: var(--color-ink-50);
  }

  p,
  ul {
    color: var(--color-marketing-gray-70);
  }

  hr {
    border-top: .5px dashed var(--color-black);
    margin-bottom: 2rem;
  }

  .icon-explanation-block {
    display: grid;
    grid-template-columns: [icon] 140px [body] auto;
    grid-template-rows: auto;
    grid-row-gap: 40px;
    grid-column-gap: 27px;
    padding-top: 16px;
    padding-bottom: 24px;
  }

  .icon-block-left {
    margin: auto;
    grid-column: icon;
    justify-self: center;
  }

  .icon-block-right {
    grid-column: body;
    align-self: center;
    max-width: 504px;
    color: var(--color-marketing-gray-70);
  }

  .icon-block-right p:last-child {
    margin: 0;
  }
  .align-start {
    margin: 0 auto;
  }

  .mzp-u-list-styled li {
    margin-bottom: .5em;
  }
</style>

<div in:fly={{ duration: 800, y: 5 }}>
  <h2 class='section-header'>Our Privacy Notice</h2>

  {#if onboarding}
    <p>
      Before you get started, please make sure you're comfortable with our privacy notice.
    </p>
  {:else}
    <p>
      Put your data to work and start building a better internet.
    </p>
  {/if}

  <hr />

  <h3>Introduction</h3>

  <p>In this notice, we detail what data Mozilla Rally collects and discloses, and why it does so.</p>

  <div class="icon-explanation-block">
    <img class="icon-block-left" width=84 src="img/new-platform.png" alt="Mozilla Rally is a new platform created to empower people to contribute their data towards <b>building a better internet" />
    <div class="icon-block-right">
      Mozilla Rally is a <b>new platform</b> created to empower people to 
      contribute their data towards <b>building a better internet</b>.
    </div>
    <img class="icon-block-left" width=111 src="img/who-is-eligible.png" alt="It is currently available to Firefox users in the U.S. who are 19 or older." />
    <div class="icon-block-right"  style="max-width: 514px;">
      It is currently available to Firefox users in the U.S. who are 19 or older.
    </div>
    <img class="icon-block-left" width=83 src="img/notice-covers-rally.png" alt="It is currently available to Firefox users in the U.S. who are 19 or older." />
    <div class="icon-block-right">
      <b>This notice only covers Rally itself</b>, as each study will have a
      unique privacy notice detailing how data is collected and handled in 
      that particular study. We also adhere to the <a href="https://www.mozilla.org/en-US/privacy/" target="_blank" rel="noopener noreferrer">Mozilla Privacy Policy</a>
      for how we receive, handle, and share information.
    </div>
  </div>
  <h3>Types of Information We Collect</h3>

  <p>We'll ask for your consent before we collect any of your info, which could include:</p>

  <div class='icon-explanation-block'>

    <img class="icon-block-left" width=95 src="img/your-demographic-data.png" alt="It is currently available to Firefox users in the U.S. who are 19 or older." />
    <div class="icon-block-right">
      <h4>Your Demographic Data</h4>
      <div>
        This includes your <b>age</b>, <b>gender</b>, <b>race/ethnicity</b>, 
        <b>education level</b>, <b>household income</b>, and <b>zip code</b>.
        This is entirely optional.
      </div>
    </div>

    <img class="icon-block-left" width=109 src="img/your-technical-data.png" alt="It is currently available to Firefox users in the U.S. who are 19 or older." />
    <div class="icon-block-right">
      <h4>Your Device's Technical Data</h4>
      <div>
        This includes your device's <b>operating system</b>, <b>add-on</b> and <b>study versions</b>, and <b>IP address</b> (which we'll only hang on to temporarily).
      </div>
    </div>

    <img class="icon-block-left" width=97 src="img/your-interaction-data.png" alt="It is currently available to Firefox users in the U.S. who are 19 or older." />
    <div class="icon-block-right">
      <h4>Your Interaction Data</h4>
      <div>
        This includes your <b>interactions with Firefox</b>, like the number and type of Firefox Add-ons you have installed, 
        your interactions with the Rally add-on itself, or the duration of your active browsing session.
      </div>
    </div>

  <img class="icon-block-left" width=82 src="img/your-location-data.png" alt="It is currently available to Firefox users in the U.S. who are 19 or older." />
  <div class="icon-block-right">
    <h4>Your Location Data</h4>
    <div>
      This includes your <b>country</b>, <b>city</b>, and <b>state</b> location, which is
      determined by your <b>IP address</b>.
    </div>
  </div>
</div>

  <h3>How We Use Your Information</h3>

  <p>
    We use the information we collect for research and development, which could mean:
  </p>

  <div class='icon-explanation-block'>
    <img class="icon-block-left align-start" width=125 src="img/how-we-use-your-information.png" alt="It is currently available to Firefox users in the U.S. who are 19 or older." />
    <ul class="mzp-u-list-styled icon-block-right">
      <li>
        determining which Rally participants could be eligible to participate
        in particular research studies, should they choose to enroll
      </li>
      <li>
        ensuring that the data we collect represents the diverse communities
        that use the internet
      </li>
      <li>
        improving Mozilla's existing products and services
      </li>
      <li>
        creating and developing new products
      </li>
    </ul>
  </div>

  <h3>Who We May Share Information With</h3>

  <p>
    We may share information with trusted entities that help us fulfill our mission, including:
  </p>

  <div class='icon-explanation-block'>

    <img class="icon-block-left" width=99 src="img/data-storage-provider.png" alt="It is currently available to Firefox users in the U.S. who are 19 or older." />
    <div class='icon-block-right'>
      <h4>Our Data Storage Provider</h4>

      <div>
        We use Google's cloud storage service to store the data collected
        through Rally. Google only stores Rally data and <b>cannot use that
          data for its own purposes</b>.
      </div>
    </div>

    <img class="icon-block-left" width=117 src="img/our-research-collaborators.png" alt="It is currently available to Firefox users in the U.S. who are 19 or older." />
    <div class='icon-block-right'>
      <h4>Our Research Collaborators</h4>

      <div>
        Rally collaborates with trusted third parties to build and release studies. 
        For any studies you join, we may ask you to share the data collected
        under <b>this Privacy Notice</b> with third party researcher(s)
        administering the study. Our research collaborators are under contracts
        with Mozilla to ensure that <b>your data is protected</b> and handled only
        in ways we've approved.
      </div>
    </div>

    <img class="icon-block-left" width=118 src="img/people-like-you.png" alt="It is currently available to Firefox users in the U.S. who are 19 or older." />
    <div class='icon-block-right'>
      <h4>People Like You (only aggregated data)</h4>

      <div>
        Our mission is focused on <b>empowering everyday citizens</b>, not just a
        select few. To that end, we may release aggregated, de-identified data sets
        to help further public knowledge on certain issues. These
        data sets will be <b>stripped of any identifiable data</b>, and won't reveal
        anything about individual users.
      </div>
    </div>
  </div>

  <h3>How You Can Manage Your Data</h3>
  <p>Our "opt-in" approach to data collection means that you choose which data you share with us.</p>

  <div class='icon-explanation-block' style="padding-bottom: 48px;">
    <img class="icon-block-left" width=96 src="img/manage-your-data.png" alt="It is currently available to Firefox users in the U.S. who are 19 or older." />
    <!-- accommodate the link breaking -->
    <div class='icon-block-right'>
    <p>Rally operates based on <b>your participation</b> – meaning you can
    choose to disclose the level of information you're comfortable with, either by finding a study
  that matches your level of comfort or by declining to share demographic information in your profile. <br /><a target="_blank" rel="noopener noreferrer" href="https://support.mozilla.org/en-US/kb/mozilla-rally-managing-account-data">Learn more about managing your data</a>.</p>
  <p>If you have any other questions regarding our privacy practices, please contact us at <a href='mailto:compliance@mozilla.com'>compliance@mozilla.com</a>.</p>
</div>
  </div>



</div>
