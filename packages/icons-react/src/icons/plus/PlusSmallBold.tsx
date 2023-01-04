import React, { FC, SVGAttributes } from "react";

export const PlusSmallBold: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M9.25 4H10.75V16H9.25V4Z" fill="currentColor" />
        <path d="M4 9.25H16V10.75H4V9.25Z" fill="currentColor" />
    </svg>
);
