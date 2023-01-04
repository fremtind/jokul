import React, { FC, SVGAttributes } from "react";

export const PlusMediumBold: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M11 4H13V20H11V4Z" fill="currentColor" />
        <path d="M4 11H20V13H4V11Z" fill="currentColor" />
    </svg>
);
