import React from "react";

interface Props {
    className?: string;
}

export const CalendarIcon = ({ className }: Props) => (
    <svg className={className ? className : ""} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="3.5" width="23" height="20" stroke="currentColor" />
        <line x1="6.5" x2="6.5" y2="7" stroke="currentColor" />
        <line x1="17.5" x2="17.5" y2="7" stroke="currentColor" />
        <rect x="4.5" y="9.5" width="1.5" height="1.5" fill="currentColor" />
        <rect x="4.5" y="14" width="1.5" height="1.5" fill="currentColor" />
        <rect x="4.5" y="18.5" width="1.5" height="1.5" fill="currentColor" />
        <rect x="9" y="9.5" width="1.5" height="1.5" fill="currentColor" />
        <rect x="9" y="14" width="1.5" height="1.5" fill="currentColor" />
        <rect x="9" y="18.5" width="1.5" height="1.5" fill="currentColor" />
        <rect x="13.5" y="9.5" width="1.5" height="1.5" fill="currentColor" />
        <rect x="13.5" y="14" width="1.5" height="1.5" fill="currentColor" />
        <rect x="13.5" y="18.5" width="1.5" height="1.5" fill="currentColor" />
        <rect x="18" y="9.5" width="1.5" height="1.5" fill="currentColor" />
        <rect x="18" y="14" width="1.5" height="1.5" fill="currentColor" />
        <rect x="18" y="18.5" width="1.5" height="1.5" fill="currentColor" />
    </svg>
);
