import type { TextProps } from "./types.js";

export const Text = (props: TextProps) => {
    const { weight, size, lineHeight, fontStyle = "body" } = props;

    return (
        <p
            style={{
                fontWeight: weight,
                fontSize: size,
                lineHeight: lineHeight,
            }}
            className={`jkl-${fontStyle} jkl-text--beta`}
        >
            {props.children}
        </p>
    );
};
