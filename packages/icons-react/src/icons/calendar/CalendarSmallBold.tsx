import React, { FC, SVGAttributes } from "react";

export const CalendarSmallBold: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path fillRule="evenodd" clipRule="evenodd" d="M16.5 5.5h-13v11h13v-11zM2 4v14h16V4H2z" fill="currentColor" />
        <path
            d="M5 9.5l1-1 1 1-1 1-1-1zM5 13.5l1-1 1 1-1 1-1-1zM9 9.5l1-1 1 1-1 1-1-1zM9 13.5l1-1 1 1-1 1-1-1zM13 9.5l1-1 1 1-1 1-1-1zM13 13.5l1-1 1 1-1 1-1-1zM5.25 2h1.5v5h-1.5V2zM13.25 2h1.5v5h-1.5V2z"
            fill="currentColor"
        />
    </svg>
);
