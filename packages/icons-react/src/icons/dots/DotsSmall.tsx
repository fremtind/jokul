import React, { FC, SVGAttributes } from "react";

export const DotsSmall: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" {...props}>
        <path
            fill="currentColor"
            d="M11.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM6 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
        />
    </svg>
);
