import React, { FC, SVGAttributes } from "react";

export const ArrowUpSmall: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M5 8.8l.7.669 3.327-3.29V15.5h.98V6.196L13.3 9.47 14 8.8 9.5 4.5 5 8.8z" fill="currentColor" />
    </svg>
);
