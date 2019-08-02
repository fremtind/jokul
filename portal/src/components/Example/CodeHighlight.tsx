import React from "react";
import Highlight, { defaultProps, PrismTheme } from "prism-react-renderer";

interface Props {
    theme: PrismTheme;
    code: string;
}

// eslint do not understand the key is inside the getLineProps and getTokenPros fns
/* eslint-disable react/jsx-key */
const CodeHighlight = ({ theme, code }: Props) => (
    <Highlight {...defaultProps} theme={theme} code={code} language="typescript">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={`${className} portal-content__code-highlight`} style={{ ...style }}>
                {tokens.map((line, i) => (
                    <div {...getLineProps({ line, key: i })}>
                        {line.map((token, key) => (
                            <span {...getTokenProps({ token, key })} />
                        ))}
                    </div>
                ))}
            </pre>
        )}
    </Highlight>
);
/* eslint-enable react/jsx-key */

export default CodeHighlight;
