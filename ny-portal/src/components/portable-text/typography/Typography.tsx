import type { Jokul_codeBlock } from "@/sanity/types";
import type {
    PortableTextMarkComponentProps,
    PortableTextTypeComponentProps,
} from "next-sanity";
import type { FC } from "react";
import { CodeBlock as FTCodeBlock } from "../code-block";
import styles from "./typography.module.scss";

export const InlineCode: FC<PortableTextMarkComponentProps<any>> = ({
    children,
}) => <code className={styles.inlineCode}>{children}</code>;

export const CodeBlock: React.FC<
    PortableTextTypeComponentProps<Jokul_codeBlock>
> = ({ value }) => (
    <FTCodeBlock language={value.language}>{value.code || ""}</FTCodeBlock>
);
