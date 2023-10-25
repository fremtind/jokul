import { useId } from "@fremtind/jkl-react-hooks";
import React, { FC, SVGAttributes } from "react";

export const DragSmall: FC<SVGAttributes<SVGElement>> = (props) => {
    const id = useId("em");
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" {...props}>
            <g fill="currentColor" clipPath={`url(#${id})`}>
                <path d="M13 11.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM7 11.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM13 17.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM7 17.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM13 5.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM7 5.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />
            </g>
            <defs>
                <clipPath id={id}>
                    <path fill="#fff" d="M0 0h20v20H0z" />
                </clipPath>
            </defs>
        </svg>
    );
};
