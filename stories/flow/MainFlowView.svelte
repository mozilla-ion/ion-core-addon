<script>
/* This Source Code Form is subject to the terms of the Mozilla Public
    * License, v. 2.0. If a copy of the MPL was not distributed with this
    * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { setContext } from "svelte";

import Main from "../../src/routes/Main.svelte";
import { notification } from "../../src/notification-store";

import NotificationCenter from "../../src/routes/NotificationCenter.svelte";

import { get, writable } from 'svelte/store';

const mockStore = (function() {
    const { set, subscribe, update } = writable({availableStudies: []});
    return {
        set,
        subscribe,
        updateStudyEnrollment(studyID, joined) {
            update(state => {
                state.availableStudies = [...state.availableStudies.map(study => {
                    const nextStudy = {...study};
                    if (nextStudy.addonId === studyID) {
                        nextStudy.studyJoined = joined;
                        nextStudy.joinedOn = new Date();
                    }
                    return nextStudy;
                })];
                return state;
            })
        },
        updateDemographicSurvey(results) {
            update(state => {
                return {...state, demographicsData: results};
            })
        }
    }
})();

// add one nicer study with all the information.
const nicerStudy = {
    addonId: 'rally-study-01@mozilla.org',
    name: "Your Time Online and \"Doomscrolling\"",
    authors: {
        name: "Mozilla Rally"
    },
    icons: {
        64: undefined
    },
    endDate: new Date(2021, 9, 31),
    tags: ['product discovery', 'community insights'],
    studyDetailsLink: 'https://example.com',

    description: `When you participate in this study you are helping Rally discover how our community browses the internet. We will explore interesting online patterns like “doomscrolling” -- the popular term for browsing outrageous or depressing online news for a long period of time.  Our findings will lead to new Rally features or blog posts about aggregate online behavior.`,
    dataCollectionDetails: [
        'We are collecting event-level data containing host names without the specific page (e.g rally.mozilla.org) ', 
        'Events are sent when you do specific actions (listen to audio, changing a tab, watching a video, loading a new URL.',
        'The title of the page, the 1-2 sentence description and the type of social media page you’re on (for instance, “article” or “video.movie”)',
        'We will measure how far you scroll down on the page'
    ],
    detailsDirectName: "Rally Website",
}

const mockAcademicPartnerStudy = {
    addonId: 'rally.news.study@princeton.edu',
    name: "Generic Collaborator Study",
    authors: {
        name: "Generic Collaborator University"
    },
    icons: {
        64: undefined
    },
    endDate: new Date('2021-07-03'),
    tags: ['social media', 'quantified self'],
    privacyPolicy: {spec: 'https://example.com'},

    description: `This is a mock study description. All of the information here is for illustrative purposes only.`,
    dataCollectionDetails: ['page views', 'time and date of joining study', 'etc.'],
    detailsDirectName: "Rally Website",
    studyDetailsLink: '/'
}

const additionalMockPartnerStudy = {
    addonId: 'beyond-the-paywall@rally.mozilla.org',
    name: "Another Collaborator Study",
    authors: {
        name: "Another Collaborator University"
    },
    icons: {
        64: undefined
    },
    endDate: new Date('2021-07-03'),
    tags: ['advertising', 'news'],
    privacyPolicy: {spec: 'https://example.com'},

    description: `This is another mock study that utilizes the 'Beyond the Paywall' IRB consent.`,
    dataCollectionDetails: ['page views', 'time and date of joining study', 'etc.'],
    detailsDirectName: "Rally Website",
    studyDetailsLink: '/'
}

fetch('locally-available-studies.json')
    .then(r => r.json())
    .then(s => {
        mockStore.set({...get(mockStore), availableStudies: [nicerStudy, mockAcademicPartnerStudy, additionalMockPartnerStudy, ...s]});
});

setContext("rally:store", mockStore);
setContext("rally:notification", notification);
</script>

<Main />
<NotificationCenter sidebarOffset={true} />
