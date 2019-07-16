import React from "react";
interface Props {
    negative?: boolean;
}
export const Loader = ({ negative }: Props) => (
    <span className={`jkl-inline-loader ${negative ? "jkl-inline-loader--negative" : ""}`}>
        <span className="jkl-inline-loader__1" />
        <span className="jkl-inline-loader__2" />
        <span className="jkl-inline-loader__3" />
    </span>
);
