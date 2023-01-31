import React, { FC, SVGAttributes } from "react";

export const ChevronUpSmall: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M4.5 12.8l.726.7L10 8.9l4.774 4.6.726-.7L10 7.5l-5.5 5.3z" fill="currentColor" />
    </svg>
);
