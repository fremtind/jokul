import React, { FC, SVGAttributes } from "react";

export const WarningMedium: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.157 4.055c.754-1.407 2.771-1.407 3.525 0l8.08 15C22.478 20.387 21.513 22 20 22H4.003c-1.512 0-2.477-1.613-1.763-2.945l7.917-15zM11.25 9h1.5v6h-1.5V9zm.75 9.5a1 1 0 100-2 1 1 0 000 2z"
            fill="currentColor"
        />
    </svg>
);
