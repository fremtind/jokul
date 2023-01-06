import React, { FC, SVGAttributes } from "react";

export const QuestionSmall: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            d="M9.463 11.723h.627v-.957c0-1.122 1.947-1.694 1.947-3.267 0-1.089-.87-1.804-2.113-1.804-.912 0-1.902.539-2.067 1.848h.593c.122-.814.716-1.254 1.464-1.254.847 0 1.463.473 1.463 1.287 0 1.342-1.915 1.716-1.915 3.201v.946zm.373 2.442a.498.498 0 00.506-.506.495.495 0 00-.506-.495.495.495 0 00-.505.495c0 .308.242.506.505.506z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 17a7 7 0 100-14 7 7 0 000 14zm0 1a8 8 0 100-16 8 8 0 000 16z"
            fill="currentColor"
        />
    </svg>
);
