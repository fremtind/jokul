import classNames from "classnames";
import { type Language } from "prism-react-renderer";
import React, { type FC } from "react";
import { LiveEditor } from "../interactive-code/LiveEditor";
import { LiveProvider } from "../interactive-code/LiveProvider";
import { ClipboardButton } from "./ClipboardButton";

interface CodeSnippetProps {
    className?: string;
    code: string;
    /**
     * @default false
     */
    inline?: boolean;
    /**
     * @default "tsx"
     */
    language?: Language;
}

export const CodeSnippet: FC<CodeSnippetProps> = ({
    className,
    code,
    language = "tsx",
    inline = false,
}) => {
    return (
        <div
            className={classNames("code-snippet", className, {
                "code-snippet--inline": inline,
            })}
        >
            {!inline && <ClipboardButton target={code} />}
            <LiveProvider code={code.trim()} language={language}>
                <LiveEditor
                    readOnly={true}
                    style={{
                        height: "100%",
                        overflow: "auto",
                        maxHeight: "min(60vh, 500px)",
                    }}
                />
            </LiveProvider>
        </div>
    );
};
