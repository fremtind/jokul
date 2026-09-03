import type { Meta, StoryObj } from "@storybook/nextjs";
import { landkoder } from "../../../../stories/assets/landkoder.js";
import { PopupTip } from "../../tooltip/index.js";
import { Autosuggest as AutosuggestComponent } from "../Autosuggest.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Autosuggest",
    component: AutosuggestComponent,
    args: {
        label: "Velg land",
        allItems: landkoder.map((land) => `${land.navn} (${land.kode})`),
        value: "",
        placeholder: "Velg land",
        helpLabel: "Velg landet du har statsborgerskap i",
        labelProps: {
            srOnly: false,
            variant: "small",
        },
        maxNumberOfHits: 5,
        showDropdownControllerButton: false,
        noHits: {
            text: "Fant ikke landet du lette etter. Sjekk stavingen.",
            items: landkoder
                .filter((land) => land.navn === "Norge")
                .map((land) => land.navn),
        },
    },
} satisfies Meta<typeof AutosuggestComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Autosuggest: Story = {};

export const AutosuggestMedTooltip: Story = {
    args: {
        tooltip: (
            <PopupTip
                content={
                    "Vi må vite om du var innenfor Norges landegrenser da skade skjedde"
                }
            />
        ),
    },
};
