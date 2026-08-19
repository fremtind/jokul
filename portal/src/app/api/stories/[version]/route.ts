import { type NextRequest, NextResponse } from "next/server";
import {
    storybookIndexSchema,
    type StorybookEntry,
} from "@/storybook/storybookIndex";
import { isSupportedVersion } from "../versions";

export async function GET(
    _req: NextRequest,
    context: RouteContext<"/api/stories/[version]">,
) {
    const version = (await context.params).version;
    const storybookVersion = isSupportedVersion(version) ? version : "latest";
    const storybookUrl =
        storybookVersion === "local"
            ? "http://localhost:6007"
            : `https://fremtind.github.io/jokul/${storybookVersion}`;

    const storiesResponse = await fetch(`${storybookUrl}/index.json`);

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
        .map(({ id, name, title }) => ({
            id,
            name,
            title,
            url: `${storybookUrl}/iframe.html?viewMode=story&id=${id}`,
        }));

    const groupedStories = Object.groupBy(
        storyEntries,
        ({ title }) => title.split("/")[1],
    );

    return NextResponse.json(groupedStories);
}
