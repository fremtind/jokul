import { Logo } from "@fremtind/jkl-logo-react";
import React, { type HTMLAttributes, useState, type FC } from "react";

type Example = { fileName: string; url: string };

interface FigmaExampleProps {
    examples: Array<Example>;
}

export const FigmaExample: FC<FigmaExampleProps> = ({ examples }) => {
    const [activeExample, setActiveExample] = useState<Example>(examples[0]);

    return (
        <div className="jkl-portal-figma-example">
            {examples.length > 1 ? (
                <div className="jkl-portal-figma-example__files" role="tablist">
                    {examples.map((example) => (
                        <FigmaFileButton key={example.fileName} onClick={() => setActiveExample(example)}>
                            {example.fileName}
                        </FigmaFileButton>
                    ))}
                </div>
            ) : null}

            <iframe
                title="Figma-eksempel"
                className="jkl-portal-figma-example__example"
                src={`https://www.figma.com/embed?embed_host=jokul-portal&url=${encodeURIComponent(activeExample.url)}`}
                allowFullScreen
            />
        </div>
    );
};

interface FigmaFileButtonProps extends HTMLAttributes<HTMLButtonElement> {
    example?: Example;
}

const FigmaFileButton: FC<FigmaFileButtonProps> = ({ children, example, ...rest }) => (
    <button className="jkl-portal-figma-file-button" {...rest} type="button">
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
            }}
            aria-hidden
        >
            <p className="jkl-portal-figma-file-button__jokul">Jøkul</p>
            <Logo isSymbol centered={false} className="jkl-portal-figma-file-button__logo" />
        </div>
        <span className="jkl-portal-figma-file-button__file-name">{children}</span>
    </button>
);
