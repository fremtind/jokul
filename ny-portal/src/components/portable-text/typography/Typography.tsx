import type { FC } from "react";
import {
    PortableTextComponentProps,
    PortableTextMarkComponentProps,
} from "next-sanity";
import { CodeBlock as FTCodeBlock } from "../code-block";
import { Jokul_codeBlock } from "@/sanity/types";

import styles from "./typography.module.scss";

type InlineCode = PortableTextMarkComponentProps<any>;

export const InlineCode: FC<InlineCode> = ({ children }) => (
    <code className={styles.inlineCode}>{children}</code>
);

type CodeBlockProps = PortableTextComponentProps<Jokul_codeBlock>;

export const CodeBlock: React.FC<CodeBlockProps> = (props) => {
    const { value } = props;

    return (
        <FTCodeBlock language={value.language}>{value.code || ""}</FTCodeBlock>
    );
};
