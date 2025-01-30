import type { Field } from "payload";

export const CodeExampleField: Field = {
    type: "text",
    name: "code-example",
    admin: {
        components: {
            Field: "@/fields/code-example/CodeExampleInput",
        },
    },
};
