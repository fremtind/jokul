import React from "react";
import { ExampleComponentProps } from "@fremtind/jkl-portal-components";

import { Accordion, AccordionItem } from "../src";
import { UnorderedList, ListItem } from "@fremtind/jkl-list-react";

export const Example: React.FC<ExampleComponentProps> = ({ boolValues }) => (
    <Accordion inverted={boolValues && boolValues["Invertert"]}>
        <AccordionItem title="Hvem kan kjøpe livsforsikring?">
            <UnorderedList>
                <ListItem>Personer med et norsk fødselsnummer.</ListItem>
                <ListItem>Personer som har vært bosatt i Norge i minst de fem siste årene før avtalen inngås.</ListItem>
                <ListItem>Livsforsikring kan kjøpes på nett av personer mellom 18 og 79 år.</ListItem>
            </UnorderedList>
            Ønsker du en forsikringssum på mer enn 3 millioner trenger vi ekstra økonomiske opplysninger. Da må du ta
            kontakt med banken din.
        </AccordionItem>
        <AccordionItem title="Hvem kan kjøpe kritisk sykdom?">
            Personer med et norsk fødselsnummer. Personer som har vært bosatt i Norge i minst de fem siste årene før
            avtalen inngås. Kritisk sykdom kan kjøpes på nett av personer mellom 18 og 58 år. Ønsker du en
            forsikringssum på mer enn 1,1 millioner trenger vi ekstra økonomiske opplysninger. Da må du ta kontakt med
            banken din.
        </AccordionItem>
        <AccordionItem title="Hvem kan kjøpe uførepensjon?">
            Personer med et norsk fødselsnummer. Personer som har vært bosatt i Norge i minst de fem siste årene før
            avtalen inngås. Uførepensjon kan kjøpes på nett av personer mellom 18 og 60 år. Ønsker du en forsikringssum
            på mer enn 96 000 trenger vi ekstra økonomiske opplysninger. Da må du ta kontakt med banken din.
        </AccordionItem>
    </Accordion>
);
