"use client";

import { NextStudio } from "next-sanity/studio";
import type { Config } from "sanity";
import { getSanityConfig } from "sanity.config";

export default function Studio(config: Config) {
    const sanityConfig = getSanityConfig(config);

    return <NextStudio config={sanityConfig} />;
}
