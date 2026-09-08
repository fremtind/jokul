import type {
    Code,
    Jokul_examples,
    Jokul_story,
    Jokul_storyId,
    Jokul_storybook,
    Jokul_storybookEmbed,
    Jokul_storybookExample,
} from "@/sanity/types";
import { parseStorybookVersion } from "@/storybook/versions";
import { defineMigration, set } from "sanity/migrate";

const DEFAULT_HEIGHT = 360;
const MIN_HEIGHT = 120;
const MAX_HEIGHT = 1200;

const LEGACY_STORY_NAMES: Record<string, string> = {
    "komponenter-autosuggest--autosuggest-med-tooltip":
        "Autosuggest Med Tooltip",
    "mønstre-hvordan-la-brukeren-oppgi-eget-svar--tekstfelt-med-forslag":
        "Tekstfelt med forslag",
};

type ArrayItem = Record<string, unknown> & {
    _key?: string;
    _type?: string;
};

type KeyedStorybookExample = Jokul_storybookExample & {
    _key: string;
};

function getHeight(height: number | undefined) {
    if (typeof height !== "number" || !Number.isFinite(height)) {
        return DEFAULT_HEIGHT;
    }

    return Math.min(MAX_HEIGHT, Math.max(MIN_HEIGHT, Math.round(height)));
}

function getVersion(
    storyUrl: string | undefined,
): Jokul_storybookEmbed["version"] {
    if (!storyUrl) {
        return "latest";
    }

    const version = parseStorybookVersion(storyUrl);
    return version === "local" ? "latest" : version;
}

function getCode(code: Code | Jokul_storybook["code"]): Code | undefined {
    if (!code?.code) {
        return;
    }

    return {
        _type: "code",
        code: code.code,
        language: code.language,
    };
}

function getExample(
    key: string,
    embed: Jokul_storybookEmbed,
    code?: Code,
): KeyedStorybookExample {
    return {
        _key: key,
        _type: "jokul_storybookExample",
        embed,
        ...(code && { code }),
    };
}

function getExampleFromStorybook(
    block: Jokul_storybook & { _key?: string },
): KeyedStorybookExample | undefined {
    const storyId = block.story?.storyId?.trim();
    const key = block._key;

    if (!key || !storyId) {
        return;
    }

    return getExample(
        key,
        {
            _type: "jokul_storybookEmbed",
            storyId,
            storyName: block.story?.storyName?.trim() || storyId,
            version: getVersion(block.story?.storyUrl),
            height: getHeight(block.height),
            interactive: true,
        },
        getCode(block.code),
    );
}

function getExampleFromStoryId(
    block: Jokul_storyId & { _key?: string },
): KeyedStorybookExample | undefined {
    const storyId = block.story?.trim();
    const key = block._key;

    if (!key || !storyId) {
        return;
    }

    return getExample(key, {
        _type: "jokul_storybookEmbed",
        storyId,
        storyName: LEGACY_STORY_NAMES[storyId] ?? storyId,
        version: "latest",
        height: DEFAULT_HEIGHT,
        interactive: true,
    });
}

function getExampleFromStory(
    story: Jokul_story,
    key: string,
): KeyedStorybookExample | undefined {
    const storyId = story.id?.trim();

    if (!storyId) {
        return;
    }

    return getExample(
        key,
        {
            _type: "jokul_storybookEmbed",
            storyId,
            storyName: story.name?.trim() || storyId,
            version: "latest",
            height: getHeight(story.height),
            interactive: story.inert !== true,
        },
        getCode(story.code),
    );
}

function getDescriptionBlock(description: string | undefined, key: string) {
    const text = description?.trim();
    if (!text) {
        return;
    }

    return {
        _key: `${key}-description`,
        _type: "block",
        children: [
            {
                _key: `${key}-description-text`,
                _type: "span",
                marks: [],
                text,
            },
        ],
        markDefs: [],
        style: "normal",
    };
}

async function migrateExampleList(
    block: Jokul_examples & { _key?: string },
    getStory: (id: string) => Promise<Jokul_story | undefined>,
): Promise<ArrayItem[] | undefined> {
    const blockKey = block._key;
    if (!blockKey || !block.examples?.length) {
        return;
    }

    const migratedItems = await Promise.all(
        block.examples.map(async (reference, index) => {
            const story = await getStory(reference._ref);
            const key =
                index === 0
                    ? blockKey
                    : `${blockKey}-${reference._key || index}`;
            const example = story && getExampleFromStory(story, key);

            if (!story || !example) {
                return;
            }

            const description = getDescriptionBlock(story.description, key);
            return description ? [example, description] : [example];
        }),
    );

    if (migratedItems.some((items) => !items)) {
        return;
    }

    return migratedItems.flatMap((items) => items ?? []);
}

export default defineMigration({
    title: "Flytt Storybook-blokker i dokumentasjon til ny modell",
    documentTypes: [
        "jokul_component",
        "jokul_blog_post",
        "jokul_fundamentals",
        "jokul_release_notes",
        "jokul_temaside",
        "jokul_monster",
        "jokul_story",
    ],
    migrate: {
        async array(node, path, context) {
            const items = node as ArrayItem[];
            if (
                !items.some(({ _type }) =>
                    [
                        "jokul_storybook",
                        "jokul_examples",
                        "jokul_storyId",
                    ].includes(_type ?? ""),
                )
            ) {
                return;
            }

            const migratedItems: ArrayItem[] = [];
            let hasChanges = false;

            for (const item of items) {
                if (item._type === "jokul_storybook") {
                    const example = getExampleFromStorybook(
                        item as Jokul_storybook & { _key?: string },
                    );

                    if (!example) {
                        console.warn(
                            `Beholder ugyldig Storybook-blokk på ${path.join(".")}.`,
                        );
                        migratedItems.push(item);
                        continue;
                    }

                    migratedItems.push(example);
                    hasChanges = true;
                    continue;
                }

                if (item._type === "jokul_examples") {
                    const examples = await migrateExampleList(
                        item as Jokul_examples & { _key?: string },
                        (id) => context.filtered.getDocument<Jokul_story>(id),
                    );

                    if (!examples) {
                        console.warn(
                            `Beholder ugyldig eksempelliste på ${path.join(".")}.`,
                        );
                        migratedItems.push(item);
                        continue;
                    }

                    migratedItems.push(...examples);
                    hasChanges = true;
                    continue;
                }

                if (item._type === "jokul_storyId") {
                    const example = getExampleFromStoryId(
                        item as Jokul_storyId & { _key?: string },
                    );

                    if (!example) {
                        // Behold blokken så vi ikke sletter innhold migreringen ikke forstår.
                        console.warn(
                            `Beholder ugyldig story-ID-blokk på ${path.join(".")}.`,
                        );
                        migratedItems.push(item);
                        continue;
                    }

                    migratedItems.push(example);
                    hasChanges = true;
                    continue;
                }

                migratedItems.push(item);
            }

            return hasChanges ? set(migratedItems) : undefined;
        },
    },
});
