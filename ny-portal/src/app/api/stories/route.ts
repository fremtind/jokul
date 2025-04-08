import stories from "@storybook-index";
import { NextResponse } from "next/server";

export async function GET() {
    // hent ut id, name og title fra stories
    const storyEntries = Object.entries(stories.entries)
        .filter(([_, { type }]) => type === "story")
        .map(([_, { id, name, title }]) => ({ id, name, title }));

    // grupper stories etter title
    const groupedStories = Object.groupBy(
        storyEntries,
        ({ title }) => title.split("/")[1],
    );

    return NextResponse.json(groupedStories);
}
