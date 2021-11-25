import React, { FC } from "react";
import { FeedbackOption } from "../types";

export const defaultOptions: FeedbackOption<number>[] = [
    {
        label: "Veldig misfornøyd",
        value: 1,
        textAreaLabel: "Det var leit! Fortell oss gjerne hva du savner, så kan vi gjøre sidene våre bedre.",
    },
    {
        label: "Litt misfornøyd",
        value: 2,
        textAreaLabel: "Det var leit! Fortell oss gjerne hva du savner, så kan vi gjøre sidene våre bedre.",
    },
    {
        label: "Midt på treet",
        value: 3,
        textAreaLabel: "Fortell oss gjerne hva du savner, så kan vi gjøre sidene våre bedre.",
    },
    {
        label: "Ganske fornøyd",
        value: 4,
        textAreaLabel: "Så bra! Har du noen tilbakemeldinger kan du skrive dem her.",
    },
    {
        label: "Veldig fornøyd",
        value: 5,
        textAreaLabel: "Så bra! Har du noen tilbakemeldinger kan du skrive dem her.",
    },
];

const Smiley: FC = ({ children }) => (
    <svg
        className="jkl-feedback-smiley-option__icon"
        aria-hidden
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="24" cy="24" r="23" stroke="currentColor" strokeWidth="2" />
        {children}
    </svg>
);

const VeldigSurSmiley = () => (
    <Smiley>
        <path
            d="M12 36C12 29.3726 17.3726 24 24 24C30.6274 24 36 29.3726 36 36"
            stroke="currentColor"
            strokeWidth="2"
        />
        <path d="M12 16.7837H20" stroke="currentColor" strokeWidth="2" />
        <path d="M28 16.7837H36" stroke="currentColor" strokeWidth="2" />
    </Smiley>
);

const LittSurSmiley = () => (
    <Smiley>
        <circle cx="15.5" cy="16.5" r="1.5" fill="currentColor" />
        <circle cx="32.5" cy="16.5" r="1.5" fill="currentColor" />
        <path d="M12 34.5C12 34.5 16.5 28 24 28C31.5 28 36 34.5 36 34.5" stroke="currentColor" strokeWidth="2" />
    </Smiley>
);

const NoytralSmiley = () => (
    <Smiley>
        <path d="M10.9834 30.8384L37.0172 30.8384" stroke="currentColor" strokeWidth="2" />
        <circle cx="15.5" cy="17.5" r="1.5" fill="currentColor" />
        <circle cx="32.5" cy="17.5" r="1.5" fill="currentColor" />
    </Smiley>
);

const LittGladSmiley = () => (
    <Smiley>
        <circle cx="15.5" cy="16.5" r="1.5" fill="currentColor" />
        <circle cx="32.5" cy="16.5" r="1.5" fill="currentColor" />
        <path d="M12 28C12 28 15.5 36 24 36C32.5 36 36 28 36 28" stroke="currentColor" strokeWidth="2" />
    </Smiley>
);

const VeldigGladSmiley = () => (
    <Smiley>
        <path
            d="M36 24C36 30.6274 30.6274 36 24 36C17.3726 36 12 30.6274 12 24"
            stroke="currentColor"
            strokeWidth="2"
        />
        <path d="M28.5 16.6001H34.5" stroke="currentColor" strokeWidth="2" />
        <circle cx="15.5" cy="16.6616" r="1.5" fill="currentColor" />
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
