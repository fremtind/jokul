import React, { FC, SVGAttributes } from "react";

export const QuestionMedium: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            d="M11.218 14.688h.912v-1.392c0-1.632 2.832-2.464 2.832-4.752 0-1.584-1.264-2.624-3.072-2.624-1.328 0-2.768.784-3.008 2.688h.864c.176-1.184 1.04-1.824 2.128-1.824 1.232 0 2.128.688 2.128 1.872 0 1.952-2.784 2.496-2.784 4.656v1.376zm.544 3.552a.724.724 0 00.736-.736c0-.432-.352-.72-.736-.72s-.736.288-.736.72c0 .448.352.736.736.736z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 21a9 9 0 100-18 9 9 0 000 18zm0 1c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
            fill="currentColor"
        />
    </svg>
);
