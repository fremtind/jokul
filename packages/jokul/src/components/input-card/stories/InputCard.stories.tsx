import type { Meta, StoryObj } from "@storybook/nextjs";
import React, { useState } from "react";
import { InputCard } from "../InputCard.js";
import { InputCardGroup } from "../InputCardGroup.js";

// Illustrasjonene bruker kun semantiske tokens, så de følger valgt brand og tema
const skadeFarge = "var(--jkl-color-text-accent)";
const flate = "var(--jkl-color-background-container-accent)";

const Illustrasjon = ({ storrelse }: { storrelse: number }) => (
    <svg
        width="96"
        height="96"
        viewBox="0 0 96 96"
        role="presentation"
        focusable="false"
    >
        <rect
            x={48 - storrelse / 2}
            y={48 - storrelse / 2}
            width={storrelse}
            height={storrelse}
            rx="8"
            fill={flate}
            stroke="var(--jkl-color-background-contrast)"
            strokeWidth="3"
        />
    </svg>
);

const Hus = ({ vann }: { vann: "tak" | "vegg" | "grunn" }) => (
    <svg
        width="120"
        height="96"
        viewBox="0 0 120 96"
        role="presentation"
        focusable="false"
        fill="none"
        stroke="var(--jkl-color-background-contrast)"
        strokeWidth="3"
        strokeLinejoin="round"
        strokeLinecap="round"
    >
        <path d="M24 46 60 16l36 30v38H24z" fill={flate} />
        <path d="M52 84V62h16v22" />
        <g stroke={skadeFarge}>
            {vann === "tak" && (
                <path d="M46 4v8m14-10v8m14 0V4M56 24l4 6 4-6" />
            )}
            {vann === "vegg" && <path d="M4 56h14m-14 12h14m-8-24 8 12" />}
            {vann === "grunn" && (
                <path d="M12 90h96M30 92l-4 4m24-4-4 4m24-4-4 4" />
            )}
        </g>
    </svg>
);

const storrelser = [
    {
        value: "small",
        label: "Small",
        description: "For deg som bor alene og har lite innbo.",
        storrelse: 32,
    },
    {
        value: "medium",
        label: "Medium",
        description: "For små husholdninger med vanlig innbo.",
        storrelse: 56,
    },
    {
        value: "large",
        label: "Large",
        description: "For store husholdninger eller mye verdifullt innbo.",
        storrelse: 80,
    },
];

const enkeltKort = (Story: () => React.ReactElement) => (
    <div style={{ maxInlineSize: "20rem" }}>
        <Story />
    </div>
);

const meta = {
    title: "Komponenter/InputCard",
    component: InputCard,
    args: {
        type: "radio",
        label: "Medium",
        description: "For små husholdninger med vanlig innbo.",
        value: "medium",
        name: "storrelse",
        illustration: <Illustrasjon storrelse={56} />,
        invalid: false,
    },
    parameters: { layout: "padded" },
    decorators: [
        (Story) => (
            <form name="test">
                <Story />
            </form>
        ),
    ],
} satisfies Meta<typeof InputCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputCardStory: Story = {
    decorators: [enkeltKort],
    name: "Input Card",
};

export const Checkbox: Story = {
    decorators: [enkeltKort],
    args: { type: "checkbox", name: "tillegg" },
};

export const UtenIllustrasjon: Story = {
    decorators: [enkeltKort],
    name: "Uten illustrasjon",
    args: { illustration: undefined },
};

export const Disabled: Story = {
    decorators: [enkeltKort],
    args: { disabled: true },
};

export const DisabledValgt: Story = {
    decorators: [enkeltKort],
    name: "Disabled og valgt",
    args: { disabled: true, defaultChecked: true },
};

export const Gruppe: Story = {
    render: () => (
        <InputCardGroup legend="Velg størrelse" name="storrelse">
            {storrelser.map(({ storrelse, ...kort }) => (
                <InputCard
                    key={kort.value}
                    type="radio"
                    illustration={<Illustrasjon storrelse={storrelse} />}
                    {...kort}
                />
            ))}
        </InputCardGroup>
    ),
};

export const Controlled: Story = {
    render: () => {
        const [value, setValue] = useState("medium");
        return (
            <InputCardGroup
                legend="Velg størrelse"
                description="Du kan endre størrelsen senere."
                name="storrelse-controlled"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            >
                {storrelser.map(({ storrelse, ...kort }) => (
                    <InputCard
                        key={kort.value}
                        type="radio"
                        illustration={<Illustrasjon storrelse={storrelse} />}
                        {...kort}
                    />
                ))}
            </InputCardGroup>
        );
    },
};

export const GruppeMedFeil: Story = {
    name: "Gruppe med feilmelding",
    render: () => (
        <InputCardGroup
            legend="Velg størrelse"
            name="storrelse-feil"
            errorLabel="Du må velge en størrelse"
        >
            {storrelser.map(({ storrelse, ...kort }) => (
                <InputCard
                    key={kort.value}
                    type="radio"
                    illustration={<Illustrasjon storrelse={storrelse} />}
                    {...kort}
                />
            ))}
        </InputCardGroup>
    ),
};

export const Flervalg: Story = {
    render: () => (
        <InputCardGroup legend="Velg tillegg" name="tillegg" type="checkbox">
            {storrelser.map(({ storrelse, ...kort }) => (
                <InputCard
                    key={kort.value}
                    type="checkbox"
                    illustration={<Illustrasjon storrelse={storrelse} />}
                    {...kort}
                />
            ))}
        </InputCardGroup>
    ),
};

export const Vertikal: Story = {
    render: () => (
        <div style={{ maxInlineSize: "24rem" }}>
            <InputCardGroup
                legend="Velg størrelse"
                name="storrelse-vertikal"
                direction="vertical"
            >
                {storrelser.map(({ storrelse, ...kort }) => (
                    <InputCard
                        key={kort.value}
                        type="radio"
                        illustration={<Illustrasjon storrelse={storrelse} />}
                        {...kort}
                    />
                ))}
            </InputCardGroup>
        </div>
    ),
};

export const HvorKomVannetInn: Story = {
    name: "Hvor kom vannet inn?",
    render: () => (
        <InputCardGroup legend="Hvor kom vannet inn?" name="vanninntrenging">
            <InputCard
                type="radio"
                value="tak"
                label="Tak"
                description="Vannet kom ned gjennom taket eller fra loftet."
                illustration={<Hus vann="tak" />}
            />
            <InputCard
                type="radio"
                value="vegg"
                label="Vegg"
                description="Vannet kom inn gjennom en yttervegg, et vindu eller en dør."
                illustration={<Hus vann="vegg" />}
            />
            <InputCard
                type="radio"
                value="grunn"
                label="Grunn"
                description="Vannet kom opp fra grunnen eller gjennom gulvet i kjelleren."
                illustration={<Hus vann="grunn" />}
            />
        </InputCardGroup>
    ),
};

const stroke = {
    width: 120,
    height: 96,
    viewBox: "0 0 120 96",
    role: "presentation",
    focusable: false,
    fill: "none",
    stroke: "var(--jkl-color-background-contrast)",
    strokeWidth: 3,
    strokeLinejoin: "round",
    strokeLinecap: "round",
} as const;

const Bil = ({ skade }: { skade: "foran" | "side" | "bak" }) => (
    <svg {...stroke}>
        <path d="M12 64v-12l12-4 14-18h44l16 18 10 4v12z" fill={flate} />
        <circle cx="34" cy="66" r="8" />
        <circle cx="86" cy="66" r="8" />
        <g stroke={skadeFarge}>
            {skade === "foran" && <path d="M108 50l8-4m-8 10 8 2m-8-18 6-6" />}
            {skade === "side" && <path d="M52 46l6 8-6 6 8 6" />}
            {skade === "bak" && <path d="M12 50l-8-4m8 10-8 2m8-18-6-6" />}
        </g>
    </svg>
);

const Innbrudd = ({ type }: { type: "dor" | "vindu" | "kjeller" }) => (
    <svg {...stroke}>
        {type === "dor" && (
            <>
                <rect
                    x="36"
                    y="12"
                    width="48"
                    height="76"
                    rx="2"
                    fill={flate}
                />
                <circle cx="74" cy="52" r="3" />
                <path
                    d="M36 40l14 8-8 8 12 8"
                    stroke={skadeFarge}
                    fill="none"
                />
            </>
        )}
        {type === "vindu" && (
            <>
                <rect
                    x="30"
                    y="20"
                    width="60"
                    height="56"
                    rx="2"
                    fill={flate}
                />
                <path d="M60 20v56M30 48h60" />
                <path d="M44 28l10 12-8 8 12 12" stroke={skadeFarge} />
            </>
        )}
        {type === "kjeller" && (
            <>
                <path d="M12 60h96M12 90h96" />
                <rect
                    x="44"
                    y="64"
                    width="32"
                    height="20"
                    rx="2"
                    fill={flate}
                />
                <path d="M52 64l8 8-6 6 8 6" stroke={skadeFarge} />
            </>
        )}
    </svg>
);

const Rom = ({ rom }: { rom: "kjokken" | "bad" | "stue" | "soverom" }) => (
    <svg {...stroke}>
        <path d="M16 84h88" />
        {rom === "kjokken" && (
            <>
                <rect x="24" y="48" width="72" height="36" />
                <path d="M24 60h72M60 60v24M30 28h60v12H30z" />
            </>
        )}
        {rom === "bad" && (
            <>
                <path d="M20 56h80v14a14 14 0 0 1-14 14H34a14 14 0 0 1-14-14z" />
                <path d="M32 56V30a8 8 0 0 1 16 0" />
            </>
        )}
        {rom === "stue" && (
            <>
                <path d="M24 56a8 8 0 0 1 8-8h56a8 8 0 0 1 8 8v28H24z" />
                <path d="M16 62h8v22h-8zM96 62h8v22h-8z" />
            </>
        )}
        {rom === "soverom" && (
            <>
                <path d="M16 84V44M16 66h88v18M104 66V56a8 8 0 0 0-8-8H52v18" />
                <rect x="24" y="52" width="20" height="14" rx="4" />
            </>
        )}
    </svg>
);

const Mobil = ({ skade }: { skade: "skjerm" | "vann" | "tyveri" }) => (
    <svg {...stroke}>
        <rect x="40" y="8" width="40" height="80" rx="6" fill={flate} />
        <path d="M54 80h12" />
        {skade === "skjerm" && (
            <path d="M40 24l16 14-8 8 14 10-6 10" stroke={skadeFarge} />
        )}
        {skade === "vann" && (
            <path
                d="M60 30c-8 10-10 14-10 20a10 10 0 0 0 20 0c0-6-2-10-10-20z"
                stroke={skadeFarge}
            />
        )}
        {skade === "tyveri" && (
            <path d="M92 20l12 12m0-12-12 12" stroke={skadeFarge} />
        )}
    </svg>
);

export const HvorErBilenSkadet: Story = {
    name: "Bilskade: Hvor er bilen skadet?",
    render: () => (
        <InputCardGroup
            legend="Hvor er bilen skadet?"
            description="Velg området som har fått mest skade."
            name="bilskade"
            defaultValue="foran"
        >
            <InputCard
                type="radio"
                value="foran"
                label="Foran"
                description="Støtfanger, lykter eller panser."
                illustration={<Bil skade="foran" />}
            />
            <InputCard
                type="radio"
                value="side"
                label="Siden"
                description="Dører, speil eller skjermer."
                illustration={<Bil skade="side" />}
            />
            <InputCard
                type="radio"
                value="bak"
                label="Bak"
                description="Støtfanger, bakluke eller baklykter."
                illustration={<Bil skade="bak" />}
            />
        </InputCardGroup>
    ),
};

export const HvorBrøtDeSegInn: Story = {
    name: "Innbrudd: Hvor kom tyven inn?",
    render: () => (
        <InputCardGroup
            legend="Hvor kom tyven inn?"
            name="innbrudd"
            errorLabel="Du må velge hvor tyven kom inn"
        >
            <InputCard
                type="radio"
                value="dor"
                label="Dør"
                description="Ytterdør, balkongdør eller terrassedør."
                illustration={<Innbrudd type="dor" />}
            />
            <InputCard
                type="radio"
                value="vindu"
                label="Vindu"
                description="Vindu i første etasje eller kjeller."
                illustration={<Innbrudd type="vindu" />}
            />
            <InputCard
                type="radio"
                value="kjeller"
                label="Kjeller"
                description="Kjellerdør eller kjellerlem."
                illustration={<Innbrudd type="kjeller" />}
            />
        </InputCardGroup>
    ),
};

export const HvilkeRomErSkadet: Story = {
    name: "Vannskade: Hvilke rom er skadet?",
    render: () => (
        <InputCardGroup
            legend="Hvilke rom er skadet?"
            description="Du kan velge flere."
            name="rom"
            type="checkbox"
        >
            <InputCard
                type="checkbox"
                value="kjokken"
                label="Kjøkken"
                illustration={<Rom rom="kjokken" />}
            />
            <InputCard
                type="checkbox"
                value="bad"
                label="Bad"
                illustration={<Rom rom="bad" />}
            />
            <InputCard
                type="checkbox"
                value="stue"
                label="Stue"
                illustration={<Rom rom="stue" />}
            />
            <InputCard
                type="checkbox"
                value="soverom"
                label="Soverom"
                illustration={<Rom rom="soverom" />}
            />
        </InputCardGroup>
    ),
};

export const HvaHarSkjeddMedMobilen: Story = {
    name: "Mobilskade: Hva har skjedd?",
    render: () => (
        <div style={{ maxInlineSize: "24rem" }}>
            <InputCardGroup
                legend="Hva har skjedd med mobilen?"
                name="mobilskade"
                direction="vertical"
            >
                <InputCard
                    type="radio"
                    value="skjerm"
                    label="Knust skjerm"
                    description="Skjermen er sprukket eller knust."
                    illustration={<Mobil skade="skjerm" />}
                />
                <InputCard
                    type="radio"
                    value="vann"
                    label="Vannskade"
                    description="Mobilen har vært i vann eller fått væske på seg."
                    illustration={<Mobil skade="vann" />}
                />
                <InputCard
                    type="radio"
                    value="tyveri"
                    label="Tyveri"
                    description="Mobilen er stjålet eller borte."
                    illustration={<Mobil skade="tyveri" />}
                />
            </InputCardGroup>
        </div>
    ),
};
