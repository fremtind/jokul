import React, { FC, SVGAttributes } from "react";

export const ChevronRightSmall: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M7.7 5l-.7.726 4.6 4.774L7 15.274l.7.726 5.3-5.5L7.7 5z" fill="currentColor" />
    </svg>
);
