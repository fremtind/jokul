import React, { useContext } from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { Accordion, AccordionItem } from "@fremtind/jkl-accordion-react";
import { fremtindLight, fremtindDark, copyToClipboard } from "../../utils";
import { ThemeContext } from "../Layout/Layout";
import { getInterface } from "./getInterface";
import CodeHighlight from "./CodeHighlight";
import "./Example.scss";

interface TypeShape {
    name: string;
    type: string;
}

interface Props {
    exampleComponents: {};
    exampleCode: string;
    type?: string;
    types?: TypeShape[];
    exampleImport?: string;
    figma?: string[];
}

export function Example({ exampleComponents, exampleCode, type, types, exampleImport, figma }: Props) {
    const { theme } = useContext(ThemeContext);
    const currentTheme = theme === "dark" ? fremtindDark : fremtindLight;

    const copyImport = () => copyToClipboard(exampleImport || "");

    return (
        <LiveProvider scope={exampleComponents} code={exampleCode} theme={currentTheme}>
            <LivePreview className="portal-content__example" />
            <Accordion>
                <AccordionItem title="Kode">
                    <LiveEditor className="portal-content__code-editor" />
                    <LiveError />
                    {exampleImport && (
                        <button onClick={copyImport} className="portal-content__section portal-content__section--copy">
                            <h4 className="jkl-h4">Import</h4>
                            <p className="jkl-small">Klikk for å kopiere</p>
                            <CodeHighlight theme={currentTheme} code={exampleImport} />
                        </button>
                    )}
                    {type && (
                        <div className="portal-content__section">
                            <h4 className="jkl-h4">Type</h4>
                            <CodeHighlight theme={currentTheme} code={getInterface(type)} />
                        </div>
                    )}
                    {types &&
                        types.map((type) => (
                            <div key={type.name} className="portal-content__section">
                                <h4 className="jkl-h4">Type: {type.name}</h4>
                                <CodeHighlight theme={currentTheme} code={getInterface(type.type)} />
                            </div>
                        ))}
                </AccordionItem>
                {figma && (
                    <AccordionItem title={`Design`}>
                        <div className="portal-content__figma">
                            {figma.map((sketch) => (
                                <iframe
                                    title="Figma skisse"
                                    key={sketch}
                                    className="portal-content__figma__iframe"
                                    width="1000"
                                    height="500"
                                    src={`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(
                                        sketch,
                                    )}`}
                                ></iframe>
                            ))}
                        </div>
                    </AccordionItem>
                )}
            </Accordion>
        </LiveProvider>
    );
}
