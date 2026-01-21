import type { Jokul_storybook } from "@/sanity/types";
import {
    at,
    createIfNotExists,
    defineMigration,
    patch,
    replace,
} from "sanity/migrate";

export default defineMigration({
    title: "Convert stories to documents",
    documentTypes: [
        "jokul_component",
        "documentation_article",
        "jokul_fundamentals",
    ],
    migrate: {
        document(jokul_component) {
            const componentDocs = jokul_component.documentation_article;
            const stories = componentDocs
                ?.filter((doc: Jokul_storybook) => !doc._ref)
                ?.flatMap((doc: Jokul_storybook) => {
                    if (doc._type === "jokul_storybook") {
                        return doc;
                    }
                });

            return stories?.flatMap((storyBlock) => {
                const story = storyBlock?.story;

                if (story) {
                    const { storyId } = story;

                    const newStory = {
                        ...story,
                        id: story?.storyId,
                        title: story?.storyName,
                        _id: story?._id,
                        _type: "jokul_story",
                    };

                    return [
                        createIfNotExists({
                            ...newStory,
                        }),
                        patch(
                            jokul_component._id,
                            at(
                                ["documentation_article"],
                                replace(
                                    [{ _type: "reference", _ref: storyId }],
                                    {
                                        _key: story?._key,
                                    },
                                ),
                            ),
                        ),
                    ];
                }
            });
        },
    },
});
