import React, { type CSSProperties, type FC } from "react";

export interface PlaceholderImageProps {
    className?: string;
    style?: CSSProperties;
}

export const PlaceholderImage: FC<PlaceholderImageProps> = (props) => {
    return (
        <svg {...props} viewBox="0 0 1190 656" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="1189.08" height="656" rx="6" fill="#E4CCFF" />
            <path
                d="M580.152 480.38L395.663 169.999C393.341 166.069 387.654 166.069 385.332 169.999L200.843 480.38C198.479 484.379 201.362 489.432 206.008 489.432H574.987C579.632 489.432 582.516 484.379 580.152 480.38Z"
                fill="#D4B7F4"
            />
            <circle cx="813.825" cy="328.386" r="176.386" fill="#D4B7F4" />
        </svg>
    );
};
