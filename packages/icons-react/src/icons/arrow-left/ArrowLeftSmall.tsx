import React, { FC, SVGAttributes } from "react";

export const ArrowLeftSmall: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M8.3 5.5l.669.7-3.29 3.327H15v.98H5.696L8.97 13.8l-.668.7L4 10l4.3-4.5z" fill="currentColor" />
    </svg>
);
