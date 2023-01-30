import React, { FC, SVGAttributes } from "react";

export const CalendarSmall: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            d="M3 4h1v13H3V4zM6 2h1v4H6V2zM5.793 8.007L6.5 7.3l.707.707-.707.707-.707-.707zM9.293 8.007L10 7.3l.707.707-.707.707-.707-.707zM12.793 8.007L13.5 7.3l.707.707-.707.707-.707-.707zM5.793 11.007L6.5 10.3l.707.707-.707.707-.707-.707zM9.293 11.007L10 10.3l.707.707-.707.707-.707-.707zM12.793 11.007l.707-.707.707.707-.707.707-.707-.707zM5.793 14.007L6.5 13.3l.707.707-.707.707-.707-.707zM9.293 14.007L10 13.3l.707.707-.707.707-.707-.707zM12.793 14.007l.707-.707.707.707-.707.707-.707-.707z"
            fill="currentColor"
        />
        <path d="M3 4h14v1H3V4zM3 16h14v1H3v-1z" fill="currentColor" />
        <path d="M16 4h1v13h-1V4zM13 2h1v4h-1V2z" fill="currentColor" />
    </svg>
);
