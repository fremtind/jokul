import { WithChildren } from "@fremtind/jkl-core";
import React, { FC } from "react";
import { FeedbackOption } from "../types";

export const defaultOptions: FeedbackOption<number>[] = [
    {
        label: "Veldig misfornøyd",
        value: 1,
        textAreaLabel:
            "Det var leit! Fortell oss gjerne hva du savner, så kan vi gjøre sidene våre bedre.",
    },
    {
        label: "Litt misfornøyd",
        value: 2,
        textAreaLabel:
            "Det var leit! Fortell oss gjerne hva du savner, så kan vi gjøre sidene våre bedre.",
    },
    {
        label: "Midt på treet",
        value: 3,
        textAreaLabel:
            "Fortell oss gjerne hva du savner, så kan vi gjøre sidene våre bedre.",
    },
    {
        label: "Ganske fornøyd",
        value: 4,
        textAreaLabel:
            "Så bra! Har du noen tilbakemeldinger kan du skrive dem her.",
    },
    {
        label: "Veldig fornøyd",
        value: 5,
        textAreaLabel:
            "Så bra! Har du noen tilbakemeldinger kan du skrive dem her.",
    },
];

const Smiley: FC<WithChildren> = ({ children }) => (
    <svg
        className="jkl-feedback-smiley-option__icon"
        aria-hidden
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="2" />
        {children}
    </svg>
);

const VeldigSurSmiley = () => (
    <Smiley>
        <path
            d="M10 30C10 24.4772 14.4772 20 20 20C25.5228 20 30 24.4772 30 30"
            stroke="currentColor"
            strokeWidth="2"
        />
        <path d="M10 13.9865H16.6667" stroke="currentColor" strokeWidth="2" />
        <path
            d="M23.3333 13.9865H29.9999"
            stroke="currentColor"
            strokeWidth="2"
        />
    </Smiley>
);

const LittSurSmiley = () => (
    <Smiley>
        <path
            d="M10 28.75C10 28.75 13.75 23.3334 20 23.3334C26.25 23.3334 30 28.75 30 28.75"
            stroke="currentColor"
            strokeWidth="2"
        />
        <circle cx="12.5" cy="14.5" r="1.5" fill="currentColor" />
        <circle cx="27.5" cy="14.5" r="1.5" fill="currentColor" />
    </Smiley>
);

const NoytralSmiley = () => (
    <Smiley>
        <path
            d="M9.15283 25.6986H30.8477"
            stroke="currentColor"
            strokeWidth="2"
        />
        <circle cx="12.5" cy="14.5" r="1.5" fill="currentColor" />
        <circle cx="27.5" cy="14.5" r="1.5" fill="currentColor" />
    </Smiley>
);

const LittGladSmiley = () => (
    <Smiley>
        <path
            d="M10 23.3334C10 23.3334 12.9167 30 20 30C27.0833 30 30 23.3334 30 23.3334"
            stroke="currentColor"
            strokeWidth="2"
        />
        <circle cx="12.5" cy="14.5" r="1.5" fill="currentColor" />
        <circle cx="27.5" cy="14.5" r="1.5" fill="currentColor" />
    </Smiley>
);

const VeldigGladSmiley = () => (
    <Smiley>
        <path
            d="M30 21C30 26.5228 25.5228 31 20 31C14.4772 31 10 26.5228 10 21"
            stroke="currentColor"
            strokeWidth="2"
        />
        <path d="M24 14.5H29" stroke="currentColor" strokeWidth="2" />
        <circle cx="12.5" cy="14.5" r="1.5" fill="currentColor" />
    </Smiley>
);

export const getSmiley = (value: number) => {
    switch (value) {
        case 1:
            return <VeldigSurSmiley />;
        case 2:
            return <LittSurSmiley />;
        case 3:
            return <NoytralSmiley />;
        case 4:
            return <LittGladSmiley />;
        case 5:
            return <VeldigGladSmiley />;

        default:
            return <NoytralSmiley />;
    }
};
