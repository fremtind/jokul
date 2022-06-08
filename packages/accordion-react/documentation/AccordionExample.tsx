import { UnorderedList, ListItem } from "@fremtind/jkl-list-react";
import React from "react";
import { CodeExample, ExampleComponentProps } from "../../../doc-utils";
import { Accordion, AccordionItem } from "../src";

export const AccordionExample: React.FC<ExampleComponentProps> = () => (
    <Accordion>
        <AccordionItem
            title="Hvem kan kjøpe livsforsikring?"
            onClick={(e, isOpen) => {
                isOpen ? console.log("Opening first accordion item") : console.log("Closing first accordion item");
            }}
        >
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

export const accordionExampleCode: CodeExample = () => `
<Accordion>
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
`;
