import React, { type FC } from "react";

interface IconProps {
    className?: string;
    viewBox?: string;
}

export const CopyIcon: FC<IconProps> = () => (
    <svg width="22px" viewBox="0 0 22 22" aria-hidden>
        <path
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15 3H8V14H15V3ZM7 2V15H16V2H7Z"
        />
        <path
            xmlns="http://www.w3.org/2000/svg"
            d="M13 18V15H12V17H5V6H7V5H4V18H13Z"
        />
    </svg>
);

CopyIcon.displayName = "CopyIcon";
