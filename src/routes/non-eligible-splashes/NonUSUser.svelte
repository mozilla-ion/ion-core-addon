<script>
/* This Source Code Form is subject to the terms of the Mozilla Public
    * License, v. 2.0. If a copy of the MPL was not distributed with this
    * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
import { createEventDispatcher, onMount } from "svelte";
import {  fly } from 'svelte/transition';
import Button from "../../components/Button.svelte";
// NOTE: uncomment this when we have a waitlist.
// import ExternalLink from "../../components/icons/ExternalLink.svelte";

import Layout from "../../components/layouts/OnboardingLayout.svelte";
import Main from "../../components/layouts/OnboardingBody.svelte";

const dispatch = createEventDispatcher();
let mounted = false;
onMount(() => {
    mounted = true;
});
</script>

<style>
.mzp-c-call-out {
    background-color: transparent;
    min-height: calc(100vh - 2.5rem);
    padding: 0;
}

.mzp-l-content {
    padding-left: 0;
    padding-right: 0;
    padding-top: 80px;
}

.mzp-c-call-out-title {
    margin-bottom: -12px;
}

/* NOTE: once we have a waitlist link, uncomment out these classes */
/* .waitlist {
    margin-top: 24px;
    text-align: center;
}

.waitlist a {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    justify-content: center;
    grid-column-gap: 8px;
} */

</style>

{#if mounted}
<Layout>
    <Main>
        <section class="mzp-c-call-out">
            <div class="mzp-l-content" in:fly={{ duration: 800, y: 5 }}>
                <h2
                class="mzp-c-call-out-title mzp-has-zap-1"
                in:fly={{ duration: 800, y: 5 }}>
                <img src="img/logo-wide.svg" alt="Mozilla Rally Logo" />
                </h2>

                <p
                class="mzp-c-call-out-desc"
                style="color: var(--color-marketing-gray-70); letter-spacing: -.01em;">
                Put your data to work and start building a better internet.
                </p>

                <p style="font-weight: bold; margin: auto; margin-top: 60px; margin-bottom: 20px; width: 660px;">
                    At this time, Mozilla Rally is only available to participants based in the U.S., but we're
                    hoping to provide access to other countries as soon as we can.
                </p>

                <div
                in:fly={{ duration: 800, y: -5 }}
                class="mzp-c-button-download-container"
                style="width: 239px; display: grid; margin: auto;">
                <Button 
                product
                leave size="xl" on:click={() => dispatch('remove-extension')}>
                    Remove Extension
                </Button>
                </div>
                <!-- uncomment out this block and update the link when we have the waitlist available -->
                <!-- <div class="waitlist">
                <a target="_blank" rel="noopener noreferrer" href="__BASE_SITE__/waitlist/">Join the Waitlist
                    <ExternalLink /></a>
                </div> -->
            </div>
        </section>
    </Main>
</Layout>
{/if}
