import React, { FC, SVGAttributes } from "react";

export const CloseSmall: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            d="M9.275 10L4 4.725 4.725 4 10 9.275 15.275 4l.725.725L10.725 10 16 15.275l-.725.725L10 10.725 4.725 16 4 15.275 9.275 10z"
            fill="currentColor"
        />
    </svg>
);
