import React, { FC, SVGAttributes } from "react";

export const ArrowRightSmall: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M11.7 5.5l-.669.7 3.29 3.327H5v.98h9.304L11.03 13.8l.668.7L16 10l-4.3-4.5z" fill="currentColor" />
    </svg>
);
