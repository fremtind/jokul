import { UnorderedList, ListItem } from "@fremtind/jkl-list-react";
import React, { useId } from "react";
import { CodeExample, ExampleComponentProps, ExampleKnobsProps } from "../../../doc-utils";
import { Accordion, AccordionItem } from "../src";

export const accordionExampleKnobs: ExampleKnobsProps = {};

export const AccordionExample: React.FC<ExampleComponentProps> = () => {
    /* -- EXAMPLE CODE START -- */
    const id = useId();
    return (
        <>
            <h2
                className="jkl-portal-heading-medium"
                id={id}
                style={{ textAlign: "center", marginBottom: 24, width: "100%" }}
            >
                Noen spørsmål
            </h2>
            <Accordion aria-labelledby={id}>
                <AccordionItem
                    title="Hvem kan kjøpe livsforsikring?"
                    onClick={(e, isOpen) => {
                        isOpen
                            ? console.log("Opening first accordion item")
                            : console.log("Closing first accordion item");
                    }}
                >
                    <UnorderedList>
                        <ListItem>Personer med et norsk fødselsnummer.</ListItem>
                        <ListItem>
                            Personer som har vært bosatt i Norge i minst de fem siste årene før avtalen inngås.
                        </ListItem>
                        <ListItem>Livsforsikring kan kjøpes på nett av personer mellom 18 og 79 år.</ListItem>
                    </UnorderedList>
                    Ønsker du en forsikringssum på mer enn 3 millioner trenger vi ekstra økonomiske opplysninger. Da må
                    du ta kontakt med banken din.
                </AccordionItem>
                <AccordionItem title="Hvem kan kjøpe kritisk sykdom?">
                    Personer med et norsk fødselsnummer. Personer som har vært bosatt i Norge i minst de fem siste årene
                    før avtalen inngås. Kritisk sykdom kan kjøpes på nett av personer mellom 18 og 58 år. Ønsker du en
                    forsikringssum på mer enn 1,1 millioner trenger vi ekstra økonomiske opplysninger. Da må du ta
                    kontakt med banken din.
                </AccordionItem>
                <AccordionItem title="Hvem kan kjøpe uførepensjon?">
                    Personer med et norsk fødselsnummer. Personer som har vært bosatt i Norge i minst de fem siste årene
                    før avtalen inngås. Uførepensjon kan kjøpes på nett av personer mellom 18 og 60 år. Ønsker du en
                    forsikringssum på mer enn 96 000 trenger vi ekstra økonomiske opplysninger. Da må du ta kontakt med
                    banken din.
                </AccordionItem>
            </Accordion>
        </>
    );
    /* -- EXAMPLE CODE END -- */
};

// TODO: Remove when the old portal is removed
export const accordionExampleCode: CodeExample = () => `
<>
    <h2
        className="jkl-portal-heading-medium"
        id={id}
        style={{ textAlign: "center", marginBottom: 24, width: "100%" }}
    >
        Noen spørsmål
    </h2>
    <Accordion aria-labelledby={id}>
        <AccordionItem
            title="Hvem kan kjøpe livsforsikring?"
            onClick={(e, isOpen) => {
                isOpen
                    ? console.log("Opening first accordion item")
                    : console.log("Closing first accordion item");
            }}
        >
            <UnorderedList>
                <ListItem>Personer med et norsk fødselsnummer.</ListItem>
                <ListItem>
                    Personer som har vært bosatt i Norge i minst de fem siste årene før avtalen inngås.
                </ListItem>
                <ListItem>Livsforsikring kan kjøpes på nett av personer mellom 18 og 79 år.</ListItem>
            </UnorderedList>
            Ønsker du en forsikringssum på mer enn 3 millioner trenger vi ekstra økonomiske opplysninger. Da må
            du ta kontakt med banken din.
        </AccordionItem>
        <AccordionItem title="Hvem kan kjøpe kritisk sykdom?">
            Personer med et norsk fødselsnummer. Personer som har vært bosatt i Norge i minst de fem siste årene
            før avtalen inngås. Kritisk sykdom kan kjøpes på nett av personer mellom 18 og 58 år. Ønsker du en
            forsikringssum på mer enn 1,1 millioner trenger vi ekstra økonomiske opplysninger. Da må du ta
            kontakt med banken din.
        </AccordionItem>
        <AccordionItem title="Hvem kan kjøpe uførepensjon?">
            Personer med et norsk fødselsnummer. Personer som har vært bosatt i Norge i minst de fem siste årene
            før avtalen inngås. Uførepensjon kan kjøpes på nett av personer mellom 18 og 60 år. Ønsker du en
            forsikringssum på mer enn 96 000 trenger vi ekstra økonomiske opplysninger. Da må du ta kontakt med
            banken din.
        </AccordionItem>
    </Accordion>
</>
`;
