import { defineMigration, set } from "sanity/migrate";

const LEGACY_STORY_REPLACEMENTS: Record<
    string,
    { storyId: string; storyName: string }
> = {
    "komponenter-cookieconsent--cookie-consent": {
        storyId: "komponenter-cookieconsent--personverninnstillinger",
        storyName: "Personverninnstillinger",
    },
    "komponenter-expandablepanel--expandable-panel-filled": {
        storyId: "komponenter-expandablepanel--expandable-panel",
        storyName: "Expandable Panel",
    },
    "komponenter-expander--expander-story": {
        storyId: "komponenter-expander--standalone-controlled",
        storyName: "Kontrollert uten panel",
    },
    "komponenter-file-fileinput--file-input-story": {
        storyId: "komponenter-file-input--file-input-story",
        storyName: "File Input",
    },
    "komponenter-help--help-component": {
        storyId: "komponenter-help--help",
        storyName: "Help",
    },
    "komponenter-input-group--input-group-story": {
        storyId: "komponenter-input-group--input-group",
        storyName: "Input Group",
    },
    "komponenter-toast--toast": {
        storyId: "komponenter-toast--info",
        storyName: "Info",
    },
};

export default defineMigration({
    title: "Oppdater utdaterte Storybook-ID-er",
    documentTypes: [
        "jokul_component",
        "jokul_blog_post",
        "jokul_fundamentals",
        "jokul_release_notes",
        "jokul_temaside",
        "jokul_monster",
    ],
    migrate: {
        object(node) {
            if (
                node._type !== "jokul_storybookEmbed" ||
                typeof node.storyId !== "string"
            ) {
                return;
            }

            const replacement = LEGACY_STORY_REPLACEMENTS[node.storyId];
            if (!replacement) {
                return;
            }

            return set({
                ...node,
                ...replacement,
            });
        },
    },
});
