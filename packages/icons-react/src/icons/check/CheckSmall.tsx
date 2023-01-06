import React, { FC, SVGAttributes } from "react";

export const CheckSmall: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M6.44 14.594L16.28 5l.721.703L6.44 16 2 11.67l.721-.703 3.72 3.627z" fill="currentColor" />
    </svg>
);
