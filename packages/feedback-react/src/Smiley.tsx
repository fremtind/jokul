import React from "react";
import { FeedbackOptions } from "./types";

const getSmiley = (element: FeedbackOptions) => {
    switch (element) {
        case 1:
            return <path d="M40 42C40 36.4772 35.0751 32 29 32C22.9249 32 18 36.4772 18 42"></path>;
        case 2:
            return <path d="M40 39C37.5556 35.4353 33.8529 33 29 33C24.1471 33 20.4444 35.4353 18 39"></path>;
        case 3:
            return <line x1="20" y1="37" x2="36" y2="37"></line>;
        case 4:
            return <path d="M18 35C20.4444 38.5647 24.1471 41 29 41C33.8529 41 37.5556 38.5647 40 35"></path>;
        case 5:
            return <path d="M29 45C36.5429 45 40.1429 38.3333 41 35L17 35C17.5714 38.3333 21.4571 45 29 45Z"></path>;
    }
};

export const Smiley: React.FC<{ element: FeedbackOptions }> = ({ element }) => (
    <svg
        aria-hidden
        className={`jkl-feedback__icon jkl-feedback__icon--${element}`}
        fill="currentColor"
        viewBox="0 0 57 57"
    >
        <circle cx="28.5" cy="28.5" r="27.5"></circle>
        <circle cx="19" cy="24" r="2" className="jkl-feedback__icon__eyes"></circle>
        <circle cx="38" cy="24" r="2" className="jkl-feedback__icon__eyes"></circle>
        {getSmiley(element)}
    </svg>
);
