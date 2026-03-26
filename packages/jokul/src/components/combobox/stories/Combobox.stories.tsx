import type { Meta, StoryObj } from "@storybook/nextjs";
import {
    type ComponentProps,
    type ComponentType,
    useEffect,
    useState,
} from "react";
import type { ComboboxValuePair } from "../../combobox/types.js";
import { PopupTip } from "../../tooltip/index.js";
import { Combobox } from "../Combobox.js";

import "../styles/_index.scss";

type ComboboxStoryProps = Omit<ComponentProps<typeof Combobox>, "width"> & {
    width: number;
};

const enkleValg: ComboboxValuePair[] = [
    { value: "bil", label: "Bil", tagLabel: "Bil" },
    { value: "hus", label: "Hus", tagLabel: "Hus" },
    { value: "reise", label: "Reise", tagLabel: "Reise" },
];

const bilskadeRegeltreff: ComboboxValuePair[] = [
    {
        value: "B01",
        label: "B01 - Frontkollisjon med moderat deformasjon",
        tagLabel: "B01",
        description:
            "Foreslar takst, kontroll av airbag og vurdering av leiebil.",
    },
    {
        value: "B12",
        label: "B12 - Glasskade uten karosseriskade",
        tagLabel: "B12",
        description:
            "Prioriterer glasspartner og hopper over ordinaer taksering.",
    },
    {
        value: "B19",
        label: "B19 - Parkeringsskade med ukjent motpart",
        tagLabel: "B19",
        description:
            "Sender saken til hurtigloep for egenandel og bildeinnhenting.",
    },
    {
        value: "B27",
        label: "B27 - Kollisjon med dyr over egenandelsterskel",
        tagLabel: "B27",
        description:
            "Ber om politianmeldelse eller dokumentasjon fra viltnemnd.",
    },
    {
        value: "B41",
        label: "B41 - Brann eller sot i motorrom",
        tagLabel: "B41",
        description: "Eskalerer til spesialist og stopper automatisk oppgjor.",
    },
    {
        value: "B53",
        label: "B53 - Tyveri med sporingsdata tilgjengelig",
        tagLabel: "B53",
        description:
            "Kobler inn antifraud-regelsett og ber om komplett hendelsesforloep.",
    },
];

const personskadeRegeltreff: ComboboxValuePair[] = [
    {
        value: "P03",
        label: "P03 - Nakkesleng rapportert innen 72 timer",
        tagLabel: "P03",
        description:
            "Utloser medisinsk sporsmal og forslag om oppfolgingstidspunkt.",
    },
    {
        value: "P11",
        label: "P11 - Fravaer fra arbeid over 16 dager",
        tagLabel: "P11",
        description:
            "Vurderer inntektstap og sender saken til personskadeteam.",
    },
    {
        value: "P18",
        label: "P18 - Flere behandlere involvert i samme skadeforlop",
        tagLabel: "P18",
        description: "Ber om koordinering av journalinnhenting og samtykke.",
    },
    {
        value: "P24",
        label: "P24 - Barn involvert i ulykken",
        tagLabel: "P24",
        description:
            "Aktiverer ekstra kontrollsporsmal og prioriterer manuell vurdering.",
    },
    {
        value: "P37",
        label: "P37 - Motstrid mellom skademelding og legeopplysninger",
        tagLabel: "P37",
        description:
            "Markerer mulig avvik og foreslar kvalitetssikring for vedtak.",
    },
];

const overstyringsarsaker: ComboboxValuePair[] = [
    {
        value: "M02",
        label: "M02 - Dokumentasjon kom inn etter automatisk avvisning",
        tagLabel: "M02",
        description:
            "Brukes nar saksbehandler vil overstyre et negativt regelutfall.",
    },
    {
        value: "M07",
        label: "M07 - Kunden er dekket av overgangsregel i tidligere vilkar",
        tagLabel: "M07",
        description:
            "Gjelder saker der historiske vilkar trumfer dagens regelmotor.",
    },
    {
        value: "M13",
        label: "M13 - Regelfunn gjelder annen forsikring enn valgt produkt",
        tagLabel: "M13",
        description:
            "Fjerner feiltreff nar samme kunde har flere relaterte dekninger.",
    },
    {
        value: "M21",
        label: "M21 - Saken er flagget for antifraud og trenger second opinion",
        tagLabel: "M21",
        description:
            "Tvinger manuell kontroll for utbetaling eller videre behandling.",
    },
    {
        value: "M34",
        label: "M34 - Fravik godkjent av medisinsk radgiver",
        tagLabel: "M34",
        description:
            "Dokumenterer at spesialist har godkjent unntak fra standardregelen.",
    },
];

function StoryCombobox({
    width,
    value,
    onChange,
    ...args
}: ComboboxStoryProps) {
    const [selectedValues, setSelectedValues] = useState<
        Array<ComboboxValuePair>
    >(value || []);

    useEffect(() => {
        setSelectedValues(value || []);
    }, [value]);

    return (
        <Combobox
            {...args}
            width={`${width}ch`}
            value={selectedValues}
            onChange={(event) => {
                setSelectedValues(
                    event.target.selectedOptions as Array<ComboboxValuePair>,
                );
                onChange(event);
            }}
        />
    );
}

const meta = {
    title: "Komponenter/Combobox",
    component: Combobox as unknown as ComponentType<ComboboxStoryProps>,
    argTypes: {
        width: {
            control: "number",
            description: "Bredden til feltet i ch-enheter",
        },
    },
    args: {
        placeholder: "Søk etter kode eller regelnavn",
        inline: false,
        invalid: false,
        hasTagHover: false,
        labelProps: {
            srOnly: false,
            variant: "small",
        },
        width: 28,
        description:
            "Velg ett eller flere regelfunn som skal sendes videre i vurderingen.",
        noMatchingOption: "Ingen regelfunn matcher soeket.",
        onChange: () => "",
    },
    render: (args) => <StoryCombobox {...args} />,
} satisfies Meta<ComboboxStoryProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ComboboxStory: Story = {
    name: "Combobox",
    args: {
        items: enkleValg,
        name: "forsikringer",
        label: "Velg forsikringer",
        description: "Velg en eller flere forsikringer.",
        width: 20,
    },
};

export const RegeltreffMedTagHover: Story = {
    args: {
        items: personskadeRegeltreff,
        name: "personskade-regeltreff",
        label: "Hvilke regelfunn skal folge personskadesaken?",
        description:
            "Korte tagger viser regelkodene, mens hover viser hele regelbeskrivelsen.",
        hasTagHover: true,
        tooltip: (
            <PopupTip content="Taggene viser regelkoder. Hold over en kode for aa se hele regelfunnet." />
        ),
        helpLabel:
            "Velg alle koder som skal ligge synlig i arbeidsflaten for medisinsk vurdering.",
        value: [personskadeRegeltreff[0], personskadeRegeltreff[4]],
        width: 32,
    },
};

export const BilskadeRegelmotor: Story = {
    args: {
        items: bilskadeRegeltreff,
        name: "bilskade-regeltreff",
        label: "Hvilke regelfunn traff for bilskaden?",
        description:
            "Bruk kombinasjonen av kode og forklaring for aa velge relevante funn.",
        helpLabel:
            "Soek paa kode, skadeaarsak eller anbefalt neste steg for aa filtrere listen.",
        width: 30,
    },
};

export const ManuellOverstyring: Story = {
    args: {
        items: overstyringsarsaker,
        name: "overstyringsarsaker",
        label: "Hvilke arsaker skal dokumentere manuell overstyring?",
        description:
            "Ekspertsystemet krever minst ett begrunnet avvik for a fortsette behandlingen.",
        invalid: true,
        errorLabel:
            "Velg minst en arsakskode for a dokumentere hvorfor regelfunnet overstyres.",
        noMatchingOption:
            "Ingen overstyringsarsaker matcher soeket. Proev en kode som M02 eller M21.",
        width: 34,
    },
};
