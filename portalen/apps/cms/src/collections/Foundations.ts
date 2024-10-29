import { createTopicCollection } from "./topicCreator";

export const Foundations = createTopicCollection({
    slug: "foundations",
    overrides: {
        labels: {
            singular: "Fundament",
            plural: "Fundamenter",
        },
    },
});

export default Foundations;
