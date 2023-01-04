import React, { FC, SVGAttributes } from "react";

export const ErrorSmall: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM5.79289 7.20711L8.58579 10L5.79289 12.7929L7.20711 14.2071L10 11.4142L12.7929 14.2071L14.2071 12.7929L11.4142 10L14.2071 7.20711L12.7929 5.79289L10 8.58579L7.20711 5.79289L5.79289 7.20711Z"
            fill="currentColor"
        />
    </svg>
);
