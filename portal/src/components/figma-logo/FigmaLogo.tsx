import React, { FC, HTMLAttributes } from "react";
import "./figma-logo.scss";

export const FigmaLogo: FC<HTMLAttributes<HTMLSpanElement>> = (props) => {
    return (
        <span className="jkl-portal-figma-logo" {...props}>
            <svg
                width="15"
                height="21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <title>Figma logo</title>
                <g clipPath="url(#a)" stroke="currentColor" strokeWidth="1.221">
                    <path d="M13.66 4.592a3.117 3.117 0 0 1-3.118 3.117H7.344V1.475h3.198a3.117 3.117 0 0 1 3.117 3.117ZM1.027 4.592a3.117 3.117 0 0 0 3.118 3.117h3.198V1.475H4.145a3.117 3.117 0 0 0-3.118 3.117ZM1.027 10.827a3.117 3.117 0 0 0 3.118 3.118h3.198V7.71H4.145a3.117 3.117 0 0 0-3.118 3.117Z" />
                    <path d="M1.027 17.062c0 1.721 1.416 3.117 3.138 3.117 1.744 0 3.178-1.414 3.178-3.158v-3.077H4.145a3.117 3.117 0 0 0-3.118 3.118ZM7.344 10.827a3.117 3.117 0 0 0 3.117 3.118h.081a3.117 3.117 0 1 0 0-6.235h-.08a3.117 3.117 0 0 0-3.118 3.117Z" />
                </g>
                <defs>
                    <clipPath id="a">
                        <path
                            fill="#fff"
                            transform="translate(.379 .827)"
                            d="M0 0h13.927v20H0z"
                        />
                    </clipPath>
                </defs>
            </svg>
        </span>
    );
};
