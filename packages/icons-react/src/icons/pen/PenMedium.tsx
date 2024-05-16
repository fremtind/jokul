import React, { FC, SVGAttributes } from "react";

export const PenMedium: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" {...props}>
        <path
            stroke="currentColor"
            d="m10.15 2.78-8.61 8.68-.46 3.51 3.56-.5 8.56-8.62m-3.05-3.07 1.73-1.75 3.04 3.07-1.72 1.75m-3.05-3.07 3.05 3.07"
        />
    </svg>
);
