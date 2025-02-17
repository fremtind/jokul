import {
    JSXConvertersFunction,
    RichText as PayloadRichText,
} from "@payloadcms/richtext-lexical/react";
import { ComponentProps, FC } from "react";
import { CodeExample } from "../code-example";

const jsxConverters: JSXConvertersFunction = ({ defaultConverters }) => ({
    ...defaultConverters,
    blocks: {
        "code-example": (props: {
            node: {
                fields: {
                    ["path"]: string;
                    showEditor: boolean;
                };
            };
        }) => {
            if (!props.node.fields["path"]) {
                return null;
            }
            return (
                <CodeExample
                    examplePath={props.node.fields["path"]}
                    showEditor={props.node.fields.showEditor}
                />
            );
        },
    },
});

export const RichText: FC<ComponentProps<typeof PayloadRichText>> = (props) => {
    return <PayloadRichText {...props} converters={jsxConverters} />;
};
