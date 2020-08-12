import React from "react";

type iconTypes =
    | "checkmark"
    | "x"
    | "pluss"
    | "sok"
    | "hamburger"
    | "kalender"
    | "eksternPil"
    | "pilHoyre"
    | "pilVenstre"
    | "pilOpp"
    | "pilNed";

/* eslint-disable max-len */
const IconCheckmark = () => (
    <svg width="100%" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <title>checkmark</title>
        <desc>Checkmark</desc>
        <path d="M1 15.2168L5.24264 19.4594L19.3848 5.3173" stroke="currentColor" />
    </svg>
);

const IconX = () => (
    <svg width="100%" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <title>x</title>
        <desc>Lukk</desc>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.6897 12.2047L16.7976 5.77481L16.0836 5.07422L10.0003 11.4783L3.92319 5.07428L3.20958 5.77524L9.31054 12.2044L2.5 19.374L3.21395 20.0746L9.99992 12.9308L16.7857 20.0816L17.4993 19.3807L10.6897 12.2047Z"
            fill="currentColor"
        />
    </svg>
);

const IconPluss = () => (
    <svg width="100%" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <title>pluss</title>
        <desc>Pluss</desc>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.5 13.0742V20.0742H10.5V13.0742L17.5 13.0742V12.0742L10.5 12.0742V5.07422H9.5V12.0742L2.5 12.0742V13.0742L9.5 13.0742Z"
            fill="currentColor"
        />
    </svg>
);

const IconSok = () => (
    <svg width="100%" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <title>sok</title>
        <desc>Søk</desc>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 9.07422C2 5.20823 5.13401 2.07422 9 2.07422C12.866 2.07422 16 5.20823 16 9.07422C16 12.9402 12.866 16.0742 9 16.0742C5.13401 16.0742 2 12.9402 2 9.07422ZM9 1.07422C4.58172 1.07422 1 4.65594 1 9.07422C1 13.4925 4.58172 17.0742 9 17.0742C10.9927 17.0742 12.8152 16.3457 14.2157 15.1404L19.003 19.9278L19.7101 19.2207L14.9317 14.4423C16.217 13.0228 17 11.14 17 9.07422C17 4.65594 13.4183 1.07422 9 1.07422Z"
            fill="currentColor"
        />
    </svg>
);

const IconHamburger = () => (
    <svg width="100%" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <title>hamburger</title>
        <desc>Hamburgermeny</desc>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20 6.07422H0V5.07422H20V6.07422ZM20 13.0742H0V12.0742H20V13.0742ZM0 20.0742H20V19.0742H0V20.0742Z"
            fill="currentColor"
        />
    </svg>
);

const IconKalender = () => (
    <svg width="100%" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <title>kalender</title>
        <desc>Kalender</desc>
        <g>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.60547 8.10677V6.1276H13.3971V8.10677H14.3971V6.1276H17.6471V19.2943H2.35547V6.1276H5.60547V8.10677H6.60547ZM13.3971 5.1276H6.60547V3.14844H5.60547V5.1276H1.85547H1.35547V5.6276V19.7943V20.2943H1.85547H18.1471H18.6471V19.7943V5.6276V5.1276H18.1471H14.3971V3.14844H13.3971V5.1276ZM5.7513 9.87761H4.6888V10.9401H5.7513V9.87761ZM5.7513 13.0651H4.6888V14.1276H5.7513V13.0651ZM5.7513 16.2526H4.6888V17.3151H5.7513V16.2526ZM8.9388 9.87761H7.8763V10.9401H8.9388V9.87761ZM8.9388 13.0651H7.8763V14.1276H8.9388V13.0651ZM8.9388 16.2526H7.8763V17.3151H8.9388V16.2526ZM12.1263 9.87761H11.0638V10.9401H12.1263V9.87761ZM12.1263 13.0651H11.0638V14.1276H12.1263V13.0651ZM12.1263 16.2526H11.0638V17.3151H12.1263V16.2526ZM15.3138 9.87761H14.2513V10.9401H15.3138V9.87761ZM15.3138 13.0651H14.2513V14.1276H15.3138V13.0651ZM15.3138 16.2526H14.2513V17.3151H15.3138V16.2526Z"
                fill="currentColor"
            />
        </g>
    </svg>
);

const IconEksternPil = () => (
    <svg width="100%" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <title>eksternPil</title>
        <desc>Ekstern pil</desc>
        <path
            d="M10.0756 5.70656L3.39683 5.68281L3.39313 4.64217L11.8483 4.67224L11.8784 13.1275L10.8378 13.1238L10.814 6.44507L2.11099 15.1481L1.37253 14.4096L10.0756 5.70656Z"
            fill="currentColor"
        />
    </svg>
);

const IconPilHoyre = () => (
    <svg width="100%" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <title>pilHoyre</title>
        <desc>Pil hoyre</desc>
        <path
            d="M13.0151 7.12631L8.30931 2.38689L9.04253 1.64844L15 7.64844L9.04253 13.6484L8.30931 12.91L13.0151 8.17064L-2.39442e-07 8.17064L-2.85091e-07 7.12631L13.0151 7.12631Z"
            fill="currentColor"
        />
    </svg>
);

const IconPilVenstre = () => (
    <svg width="100%" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <title>pilVenstre</title>
        <desc>Pil venstre</desc>
        <path
            d="M1.98487 8.17056L6.69069 12.91L5.95747 13.6484L5.96007e-07 7.64844L5.95747 1.64844L6.69069 2.38689L1.98495 7.12623L15 7.12623L15 8.17057L1.98487 8.17056Z"
            fill="currentColor"
        />
    </svg>
);

const IconPilOpp = () => (
    <svg width="100%" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <title>pilOpp</title>
        <desc>Pil opp</desc>
        <path
            d="M6.97787 2.13331L2.23846 6.83913L1.5 6.10591L7.5 0.148436L13.5 6.10591L12.7615 6.83913L8.0222 2.13338L8.02221 15.1484L6.97787 15.1484L6.97787 2.13331Z"
            fill="currentColor"
        />
    </svg>
);

const IconPilNed = () => (
    <svg width="100%" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <title>pilNed</title>
        <desc>Pil ned</desc>
        <path
            d="M8.02213 13.1636L12.7615 8.45775L13.5 9.19097L7.5 15.1484L1.5 9.19096L2.23845 8.45774L6.97779 13.1635L6.97779 0.148437L8.02213 0.148438L8.02213 13.1636Z"
            fill="currentColor"
        />
    </svg>
);
/* eslint-enable max-len */

const icons = {
    checkmark: <IconCheckmark />,
    x: <IconX />,
    pluss: <IconPluss />,
    sok: <IconSok />,
    hamburger: <IconHamburger />,
    kalender: <IconKalender />,
    eksternPil: <IconEksternPil />,
    pilHoyre: <IconPilHoyre />,
    pilVenstre: <IconPilVenstre />,
    pilOpp: <IconPilOpp />,
    pilNed: <IconPilNed />,
};

const getIcon = (icon: iconTypes) => icons[icon];

export const icon = (icon: iconTypes) => getIcon(icon);
