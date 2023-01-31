import React, { FC, SVGAttributes } from "react";

export const QuestionMediumBold: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            d="M11.036 13.85h1.372v-1.008c0-1.33 2.324-1.974 2.324-3.976 0-1.414-1.176-2.436-2.814-2.436-1.26 0-2.618.728-2.828 2.604h1.316c.098-.826.672-1.302 1.484-1.302.812 0 1.428.518 1.428 1.288 0 1.498-2.282 1.834-2.282 3.822v1.008zm.756 3.36c.532 0 .952-.364.952-.938s-.42-.938-.952-.938-.952.364-.952.938.42.938.952.938z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 20a8 8 0 100-16 8 8 0 000 16zm0 2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
            fill="currentColor"
        />
    </svg>
);
