import React, { FC, SVGAttributes } from "react";

export const QuestionSmallBold: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            d="M9.242 11.525h1.078v-.792c0-1.045 1.826-1.551 1.826-3.124 0-1.111-.924-1.914-2.21-1.914-.99 0-2.058.572-2.223 2.046h1.035c.077-.649.527-1.023 1.166-1.023.638 0 1.122.407 1.122 1.012 0 1.177-1.793 1.441-1.793 3.003v.792zm.594 2.64c.418 0 .748-.286.748-.737s-.33-.737-.748-.737-.748.286-.748.737.33.737.748.737z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 16.5a6.5 6.5 0 100-13 6.5 6.5 0 000 13zm0 1.5a8 8 0 100-16 8 8 0 000 16z"
            fill="currentColor"
        />
    </svg>
);
