import React from "react";
interface Props {
    negative?: boolean;
    inline?: boolean;
}
export const Loader = ({ negative = false, inline = false }: Props) => (
    <span
        data-testid="jkl-loader"
        className={`jkl-loader ${negative ? "jkl-loader--negative" : ""} ${inline ? "jkl-loader--inline" : ""}`}
    >
        <span className="jkl-loader__1" />
        <span className="jkl-loader__2" />
        <span className="jkl-loader__3" />
    </span>
);
