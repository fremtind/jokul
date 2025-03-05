"use client";

import { NextStudio } from "next-sanity/studio";
import { getSanityConfig } from "sanity.config";

interface StudioProps {
    projectId: string;
    dataset: string;
}

export default function Studio({ projectId, dataset }: StudioProps) {
    const config = getSanityConfig({
        projectId,
        dataset,
    });

    return <NextStudio config={config} />;
}
