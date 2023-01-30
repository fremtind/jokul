import React, { FC, SVGAttributes } from "react";

export const ArrowDownSmall: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M14 11.2l-.7-.669-3.327 3.29V4.5h-.98v9.304L5.7 10.53 5 11.2 9.5 15.5l4.5-4.3z" fill="currentColor" />
    </svg>
);
