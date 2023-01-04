import React, { FC, SVGAttributes } from "react";

export const PlusSmall: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M9.5 4H10.5V16H9.5V4Z" fill="currentColor" />
        <path d="M4 9.5H16V10.5H4V9.5Z" fill="currentColor" />
    </svg>
);
