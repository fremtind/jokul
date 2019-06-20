import React from "react";
import ReactDOM from "react-dom";
import { Accordion, AccordionItem } from "../src/Accordion";

const AccordionExample = () => (
    <>
        <Accordion>
            <AccordionItem title="First item">Innholdet her</AccordionItem>
            <AccordionItem title="Second item">Innholdet her også</AccordionItem>
        </Accordion>
    </>
);

const mountNode = document.getElementById("app");
ReactDOM.render(<AccordionExample />, mountNode);
