import { useId } from "@fremtind/jkl-react-hooks";
import React, { FC, SVGAttributes } from "react";

export const ErrorMediumBold: FC<SVGAttributes<SVGElement>> = (props) => {
    const id = useId("emb");
    return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g clipPath={`url(#${id})`}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-1-8V7h2v7h-2zm2.25 2.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath id={id}>
                    <path fill="#fff" d="M0 0h24v24H0z" />
                </clipPath>
            </defs>
        </svg>
    );
};
