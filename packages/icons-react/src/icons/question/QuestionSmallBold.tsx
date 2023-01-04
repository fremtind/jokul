import React, { FC, SVGAttributes } from "react";

export const QuestionSmallBold: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            d="M9.2425 11.525H10.3205V10.733C10.3205 9.688 12.1465 9.182 12.1465 7.609C12.1465 6.498 11.2225 5.695 9.9355 5.695C8.9455 5.695 7.8785 6.267 7.7135 7.741H8.7475C8.8245 7.092 9.2755 6.718 9.9135 6.718C10.5515 6.718 11.0355 7.125 11.0355 7.73C11.0355 8.907 9.2425 9.171 9.2425 10.733V11.525ZM9.8365 14.165C10.2545 14.165 10.5845 13.879 10.5845 13.428C10.5845 12.977 10.2545 12.691 9.8365 12.691C9.4185 12.691 9.0885 12.977 9.0885 13.428C9.0885 13.879 9.4185 14.165 9.8365 14.165Z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 16.5C13.5899 16.5 16.5 13.5899 16.5 10C16.5 6.41015 13.5899 3.5 10 3.5C6.41015 3.5 3.5 6.41015 3.5 10C3.5 13.5899 6.41015 16.5 10 16.5ZM10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z"
            fill="currentColor"
        />
    </svg>
);