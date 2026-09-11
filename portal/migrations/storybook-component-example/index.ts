import type {
    Jokul_component,
    Jokul_story,
    Jokul_storybookEmbed,
} from "@/sanity/types";
import { at, defineMigration, setIfMissing } from "sanity/migrate";

const DEFAULT_HEIGHT = 360;
const MIN_HEIGHT = 120;
const MAX_HEIGHT = 1200;
// Det gamle Accordion-dokumentet har en tom story-ID.
const LEGACY_STORY_ID_OVERRIDES: Record<string, string> = {
    "b5445593-658e-4bf8-b597-d28aa4f7f174": "komponenter-accordion--accordion",
};

function getHeight(height: number | undefined) {
    if (
        typeof height !== "number" ||
        !Number.isInteger(height) ||
        height < MIN_HEIGHT ||
        height > MAX_HEIGHT
    ) {
        return DEFAULT_HEIGHT;
    }

    return height;
}

function getExistingEmbed(
    embed: Jokul_storybookEmbed | undefined,
): Jokul_storybookEmbed | undefined {
    if (!embed?.storyId || !embed.storyName) {
        return;
    }

    return {
        _type: "jokul_storybookEmbed",
        storyId: embed.storyId,
        storyName: embed.storyName,
        version: embed.version ?? "latest",
        height: getHeight(embed.height),
        interactive: embed.interactive ?? true,
    };
}

function getEmbedFromStory(
    story: Jokul_story | undefined,
    storyIdOverride?: string,
): Jokul_storybookEmbed | undefined {
    const storyId = story?.id || storyIdOverride;
    if (!storyId || !story?.name) {
        return;
    }

    return {
        _type: "jokul_storybookEmbed",
        storyId,
        storyName: story.name,
        version: "latest",
        height: getHeight(story.height),
        interactive: story.inert !== true,
    };
}

export default defineMigration({
    title: "Flytt komponenteksempel til ny Storybook-modell",
    documentTypes: ["jokul_component", "jokul_story"],
    migrate: {
        async document(document, context) {
            if (document._type !== "jokul_component") {
                return [];
            }

            const component = document as Jokul_component;
            if (component.storybook) {
                return [];
            }

            const existingEmbed = getExistingEmbed(
                component.example_card?.storybook,
            );

            if (existingEmbed) {
                return at("storybook", setIfMissing(existingEmbed));
            }

            const storyReference = component.example_card?.story?._ref;
            if (!storyReference) {
                return [];
            }

            const story =
                await context.filtered.getDocument<Jokul_story>(storyReference);
            const embed = getEmbedFromStory(
                story,
                LEGACY_STORY_ID_OVERRIDES[storyReference],
            );

            if (!embed) {
                console.warn(
                    `Hopper over ${component._id}: story ${storyReference} mangler ID eller navn.`,
                );
                return [];
            }

            return at("storybook", setIfMissing(embed));
        },
    },
});
