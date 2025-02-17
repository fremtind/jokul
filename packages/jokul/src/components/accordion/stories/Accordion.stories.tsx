import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { UnorderedList } from "../../list/List.js";
import { ListItem } from "../../list/ListItem.js";
import { Accordion as AccordionComponent } from "../Accordion.js";
import { AccordionItem } from "../AccordionItem.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Accordion/Accordion",
    component: AccordionComponent,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof AccordionComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Accordion: Story = {
    args: {
        children: [
            <AccordionItem title="Hvem kan kjøpe livsforsikring?" key={0}>
                <UnorderedList style={{ margin: "var(--jkl-spacing-16) 0" }}>
                    <ListItem>Personer med et norsk fødselsnummer.</ListItem>
                    <ListItem>
                        Personer som har vært bosatt i Norge i minst de fem
                        siste årene før avtalen inngås.
                    </ListItem>
                    <ListItem>
                        Livsforsikring kan kjøpes på nett av personer mellom 18
                        og 79 år.
                    </ListItem>
                </UnorderedList>
                Ønsker du en forsikringssum på mer enn 3 millioner trenger vi
                ekstra økonomiske opplysninger. Da må du ta kontakt med banken
                din.
            </AccordionItem>,
            <AccordionItem title="Hvem kan kjøpe kritisk sykdom?" key={1}>
                Personer med et norsk fødselsnummer. Personer som har vært
                bosatt i Norge i minst de fem siste årene før avtalen inngås.
                Kritisk sykdom kan kjøpes på nett av personer mellom 18 og 58
                år. Ønsker du en forsikringssum på mer enn 1,1 millioner trenger
                vi ekstra økonomiske opplysninger. Da må du ta kontakt med
                banken din.
            </AccordionItem>,
            <AccordionItem title="Hvem kan kjøpe uførepensjon?" key={2}>
                Personer med et norsk fødselsnummer. Personer som har vært
                bosatt i Norge i minst de fem siste årene før avtalen inngås.
                Uførepensjon kan kjøpes på nett av personer mellom 18 og 60 år.
                Ønsker du en forsikringssum på mer enn 96 000 trenger vi ekstra
                økonomiske opplysninger. Da må du ta kontakt med banken din.
            </AccordionItem>,
        ],
    },
};
