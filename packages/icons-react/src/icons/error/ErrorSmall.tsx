import { useId } from "@fremtind/jkl-react-hooks";
import React, { FC, SVGAttributes } from "react";

export const ErrorSmall: FC<SVGAttributes<SVGElement>> = (props) => {
    const id = useId("es");
    return (
        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g clipPath={`url(#${id})`}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.25 6v5h1.5V6h-1.5zm.75 8.5a1 1 0 100-2 1 1 0 000 2z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath id={id}>
                    <path fill="#fff" d="M0 0h20v20H0z" />
                </clipPath>
            </defs>
        </svg>
    );
};
