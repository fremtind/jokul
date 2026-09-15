import {
    type StorybookEntry,
    storybookIndexSchema,
} from "@/storybook/storybookIndex";
import { NextResponse } from "next/server";

export async function GET() {
    const storiesResponse = await fetch(
        "https://fremtind.github.io/jokul/latest/index.json",
    );

    if (!storiesResponse.ok) {
        return NextResponse.json(
            { error: "Failed to fetch stories index" },
            { status: 502 },
        );
    }

    const parsed = storybookIndexSchema.safeParse(await storiesResponse.json());
    if (!parsed.success) {
        return NextResponse.json(
            { error: "Failed to parse stories index" },
            { status: 502 },
        );
    }

    const storyEntries = Object.values(parsed.data.entries)
        .filter((entry): entry is StorybookEntry => entry?.type === "story")
        .map(({ id, name, title }) => ({ id, name, title }));

    const groupedStories = Object.groupBy(
        storyEntries,
        ({ title }) => title.split("/")[1],
    );

    return NextResponse.json(groupedStories);
}
