import { createTopicCollection } from "./topicCreator";

export const Patterns = createTopicCollection({
    slug: "patterns",
    overrides: {
        labels: {
            singular: "Mønster",
            plural: "Mønstre",
        },
    },
});

export default Patterns;
