import React, { FC, SVGAttributes } from "react";

export const WarningMedium: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.1569 4.05501C10.911 2.64833 12.9281 2.64833 13.6822 4.05501L21.7627 19.055C22.477 20.3874 21.5117 22 20 22H4.00278C2.49103 22 1.52582 20.3874 2.24011 19.055L10.1569 4.05501ZM11.25 9H12.75V15H11.25V9ZM12 18.5C12.5523 18.5 13 18.0523 13 17.5C13 16.9477 12.5523 16.5 12 16.5C11.4477 16.5 11 16.9477 11 17.5C11 18.0523 11.4477 18.5 12 18.5Z"
            fill="currentColor"
        />
    </svg>
);
