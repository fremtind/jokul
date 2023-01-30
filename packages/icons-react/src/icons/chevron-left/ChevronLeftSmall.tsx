import React, { FC, SVGAttributes } from "react";

export const ChevronLeftSmall: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12.3 16l.7-.726L8.4 10.5 13 5.726 12.3 5 7 10.5l5.3 5.5z" fill="currentColor" />
    </svg>
);
