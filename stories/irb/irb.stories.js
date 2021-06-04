/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import PrincetonIRBStory from './PrincetonIRB.svelte';
import StanfordBeyondThePaywallIRBStory from "./StanfordBeyondThePaywallIRB.svelte"
import RS01ConsentStory from './RS01Consent.svelte';
export default {
  title: "IRB Components",
};

export const PrincetonIRB = () => ({
  Component: PrincetonIRBStory,
});

export const StanfordBeyondThePaywallIRB = () => ({
  Component: StanfordBeyondThePaywallIRBStory,
});

export const RS01Consent = () => ({
  Component: RS01ConsentStory,
});
