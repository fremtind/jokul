import React, { FC, SVGAttributes } from "react";

export const CloseSmall: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.2752 10L4 4.7248L4.7248 4L10 9.2752L15.2752 4L16 4.7248L10.7248 10L16 15.2752L15.2752 16L10 10.7248L4.7248 16L4 15.2752L9.2752 10Z"
            fill="currentColor"
        />
    </svg>
);
