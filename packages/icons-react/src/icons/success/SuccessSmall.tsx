import React, { FC, SVGAttributes } from "react";

export const SuccessSmall: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10Z"
            fill="currentColor"
        />
        <path
            d="M6.76579 9.13158L5.7 10.1974L9.25263 13.75L14.9368 8.06579L13.8711 7L9.25263 11.6184L6.76579 9.13158Z"
            style={{ fill: "var(--jkl-icon-color-secondary, transparent)" }} // TODO: erstatt hele SVGen med en ny når den er fikset til å bruke negative space
        />
    </svg>
);
