import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { AccordionItem as AccordionItemComponent } from "../AccordionItem.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Accordion/AccordionItem",
    component: AccordionItemComponent,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof AccordionItemComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AccordionItem: Story = {
    args: {
        title: "Hvem kan kjøpe kritisk sykdom?",
        children: (
            <p>
                Personer med et norsk fødselsnummer. Personer som har vært
                bosatt i Norge i minst de fem siste årene før avtalen inngås.
                Kritisk sykdom kan kjøpes på nett av personer mellom 18 og 58
                år. Ønsker du en forsikringssum på mer enn 1,1 millioner trenger
                vi ekstra økonomiske opplysninger. Da må du ta kontakt med
                banken din.
            </p>
        ),
    },
};
