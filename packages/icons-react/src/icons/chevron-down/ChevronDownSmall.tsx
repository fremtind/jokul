import React, { FC, SVGAttributes } from "react";

export const ChevronDownSmall: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M4.5 8.2l.726-.7L10 12.1l4.774-4.6.726.7-5.5 5.3-5.5-5.3z" fill="currentColor" />
    </svg>
);
