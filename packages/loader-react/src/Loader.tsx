import React from "react";
interface Props {
    textDescription: string;
    negative?: boolean;
    inline?: boolean;
    className?: string;
}
export const Loader = ({ textDescription, negative = false, inline = false, className }: Props) => {
    const componentClassName = "jkl-loader"
        .concat(negative ? " jkl-loader--negative" : "")
        .concat(inline ? " jkl-loader--inline" : "")
        .concat(className ? ` ${className}` : "");
    return (
        <span
            className={componentClassName}
            data-testid="jkl-loader"
            title={textDescription}
            aria-label={textDescription}
            role="alert"
            aria-busy="true"
        >
            <span className="jkl-loader__1" />
            <span className="jkl-loader__2" />
            <span className="jkl-loader__3" />
        </span>
    );
};
