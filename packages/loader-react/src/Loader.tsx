import React from "react";
interface Props {
    negative?: boolean;
    inline?: boolean;
    className?: string;
}
export const Loader = ({ negative = false, inline = false, className }: Props) => {
    const componentClassName = "jkl-loader"
        .concat(negative ? " jkl-loader--negative" : "")
        .concat(inline ? "jkl-loader--inline" : "")
        .concat(className ? ` ${className}` : "");
    return (
        <span data-testid="jkl-loader" className={componentClassName}>
            <span className="jkl-loader__1" />
            <span className="jkl-loader__2" />
            <span className="jkl-loader__3" />
        </span>
    );
};
