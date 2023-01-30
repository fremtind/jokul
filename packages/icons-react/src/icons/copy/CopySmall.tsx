import React, { FC, SVGAttributes } from "react";

export const CopySmall: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path fillRule="evenodd" clipRule="evenodd" d="M15 3H8v11h7V3zM7 2v13h9V2H7z" fill="currentColor" />
        <path d="M13 18v-3h-1v2H5V6h2V5H4v13h9z" fill="currentColor" />
    </svg>
);
