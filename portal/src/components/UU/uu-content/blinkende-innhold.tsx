import { List, CheckListItem } from "@fremtind/jkl-list-react";
import React from "react";
import { Paragraph } from "../../Typography";
import type { UUContent } from "./uu-content";

const blinkendeInnhold: UUContent = {
    id: "blinkende-innhold",
    title: "Blinkende innhold",
    tags: ["animasjon", "modal", "media"],
    wcagRules: ["2.3.1"],
    body: () => (
        <>
            <Paragraph>
                Med blink mener man endringer hvor resultatet motsetter hverandre på en måte som skaper en stor
                forstyrrelse. For eksempel en fargeendring på et større område eller et element som hyppig vises og
                gjemmes.
            </Paragraph>
            <List>
                <CheckListItem>Innhold skal ikke blinke oftere enn 3 ganger i sekundet</CheckListItem>
            </List>
        </>
    ),
};

export default blinkendeInnhold;
