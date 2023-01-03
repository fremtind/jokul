import React, { FC, SVGAttributes } from "react";

export const CalendarSmallBold: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.5 5.5H3.5V16.5H16.5V5.5ZM2 4V18H18V4H2Z"
            fill="currentColor"
        />
        <path d="M5 9.5L6 8.5L7 9.5L6 10.5L5 9.5Z" fill="currentColor" />
        <path d="M5 13.5L6 12.5L7 13.5L6 14.5L5 13.5Z" fill="currentColor" />
        <path d="M9 9.5L10 8.5L11 9.5L10 10.5L9 9.5Z" fill="currentColor" />
        <path d="M9 13.5L10 12.5L11 13.5L10 14.5L9 13.5Z" fill="currentColor" />
        <path d="M13 9.5L14 8.5L15 9.5L14 10.5L13 9.5Z" fill="currentColor" />
        <path d="M13 13.5L14 12.5L15 13.5L14 14.5L13 13.5Z" fill="currentColor" />
        <path d="M5.25 2H6.75V7H5.25V2Z" fill="currentColor" />
        <path d="M13.25 2H14.75V7H13.25V2Z" fill="currentColor" />
    </svg>
);
