import React, { FC, SVGAttributes } from "react";

export const TrashSmall: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14 2H6V4H4H2V5H4.07143L5 18H15L15.9286 5H18V4H16H14V2ZM13 4V3H7V4H13ZM5.07398 5H14.926L14.0689 17H5.93112L5.07398 5ZM8 7L8 15H9L9 7H8ZM11 15V7H12V15H11Z"
            fill="currentColor"
        />
    </svg>
);
