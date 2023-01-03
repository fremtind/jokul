import React, { FC, SVGAttributes } from "react";

export const CalendarSmallBold: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.5 3.5H1.5V14.5H14.5V3.5ZM0 2V16H16V2H0Z"
            fill="currentColor"
        />
        <path d="M3 7.5L4 6.5L5 7.5L4 8.5L3 7.5Z" fill="currentColor" />
        <path d="M3 11.5L4 10.5L5 11.5L4 12.5L3 11.5Z" fill="currentColor" />
        <path d="M7 7.5L8 6.5L9 7.5L8 8.5L7 7.5Z" fill="currentColor" />
        <path d="M7 11.5L8 10.5L9 11.5L8 12.5L7 11.5Z" fill="currentColor" />
        <path d="M11 7.5L12 6.5L13 7.5L12 8.5L11 7.5Z" fill="currentColor" />
        <path d="M11 11.5L12 10.5L13 11.5L12 12.5L11 11.5Z" fill="currentColor" />
        <path d="M3.25 0H4.75V5H3.25V0Z" fill="currentColor" />
        <path d="M11.25 0H12.75V5H11.25V0Z" fill="currentColor" />
    </svg>
);
