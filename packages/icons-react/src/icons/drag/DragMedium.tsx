import React, { FC, SVGAttributes } from "react";

export const DragMedium: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
        <path
            fill="currentColor"
            d="M15.5 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm-7 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm7 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm-7 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm7-14a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm-7 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
        />
    </svg>
);
