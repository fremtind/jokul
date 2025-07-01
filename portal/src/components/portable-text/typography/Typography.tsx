import type { Jokul_codeBlock } from "@/sanity/types";
import type { PortableTextTypeComponentProps } from "next-sanity";
import { CodeBlock as FTCodeBlock } from "../code-block";

export const CodeBlock: React.FC<
    PortableTextTypeComponentProps<Jokul_codeBlock>
> = ({ value }) => (
    <FTCodeBlock language={value.language}>{value.code || ""}</FTCodeBlock>
);
