import React, { FC, SVGAttributes } from "react";

export const TrashCanMedium: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17 2H7V4H4H2V5H4.05556L5 22H19L19.9444 5H22V4H20H17V2ZM16 4V3H8V4H16ZM5.0571 5H18.9429L18.054 21H5.94599L5.0571 5ZM9 18L9 8H10L10 18H9ZM14 8V18H15V8H14Z"
            fill="currentColor"
        />
    </svg>
);
