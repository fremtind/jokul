import React, { FC, SVGAttributes } from "react";

export const CalendarMedium: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path fillRule="evenodd" clipRule="evenodd" d="M21 5H3v15h18V5zM2 4v17h20V4H2z" fill="currentColor" />
        <path
            d="M6 9l1-1 1 1-1 1-1-1zM6 13l1-1 1 1-1 1-1-1zM6 17l1-1 1 1-1 1-1-1zM11 9l1-1 1 1-1 1-1-1zM11 13l1-1 1 1-1 1-1-1zM11 17l1-1 1 1-1 1-1-1zM16 9l1-1 1 1-1 1-1-1zM16 13l1-1 1 1-1 1-1-1zM16 17l1-1 1 1-1 1-1-1zM6.5 2h1v4h-1V2zM16.5 2h1v4h-1V2z"
            fill="currentColor"
        />
    </svg>
);
