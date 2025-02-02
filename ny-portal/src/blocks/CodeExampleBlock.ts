import { Block } from "payload";
import { CodeExampleField } from "@/fields/code-example";

const CodeExampleBlock: Block = {
    slug: "code-example",
    fields: [
        CodeExampleField,
        {
            type: "checkbox",
            name: "showEditor",
            label: "Vis editor",
            required: true,
            defaultValue: true,
        },
    ],
    imageURL:
        "https://external-preview.redd.it/utrj6QRPOuR6MGm5rAQlDJG-69F1hoOpU2rmWmFyIvQ.jpg?auto=webp&s=e043dacc412b9d6a666482a8983dc4e753b15303",
};

export default CodeExampleBlock;
