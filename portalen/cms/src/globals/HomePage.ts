import { GlobalConfig } from "payload/types";
import { authenticatedEditors, defaultReadAccess } from "../access";
import {
    CallToAction,
    FeedbackSection,
    HeroSection,
    PackageStats,
    PageSection,
    ScrollSection,
    VideoCTA,
} from "../blocks/page-sections";
import { pageMeta } from "../fields/meta";

export const HomePage: GlobalConfig = {
    slug: "home-page",
    label: "Forside",
    access: {
        read: defaultReadAccess,
        update: authenticatedEditors,
    },
    admin: {
        group: "Innholdssider",
    },
    fields: [
        {
            type: "tabs",
            tabs: [
                {
                    label: "Innhold",
                    fields: [
                        {
                            type: "blocks",
                            label: "Sideseksjoner",
                            labels: {
                                singular: "Sideseksjon",
                                plural: "Sideseksjoner",
                            },
                            name: "sections",
                            blocks: [
                                PageSection,
                                HeroSection,
                                VideoCTA,
                                CallToAction,
                                ScrollSection,
                                FeedbackSection,
                                PackageStats,
                            ],
                        },
                    ],
                },
                {
                    label: "Metadata",
                    fields: [pageMeta],
                },
            ],
        },
    ],
};
