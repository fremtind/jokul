import { List, CheckListItem } from "@fremtind/jkl-list-react";
import React from "react";
import { Paragraph } from "../../Typography";
import type { UUContent } from "./uu-content";

const lydVideo: UUContent = {
    id: "lyd-og-video",
    title: "Lyd og video",
    tags: ["media"],
    wcagRules: ["1.2.1", "1.4.2"],
    links: [["Vår info om blinkende innhold", "/universell-utforming/guide/#blinkende-innhold"]],
    body: () => (
        <>
            <Paragraph>
                Hvis innholdet som presenteres kun er video eller lyd skal det finnes et alternativ som formidler samme
                informasjon.
            </Paragraph>
            <List>
                <CheckListItem>
                    Unngå automatisk avspilling av innhold med mindre det er absolutt nødvendig.
                </CheckListItem>
                <CheckListItem>Hvis automatisk avspilling forekommer må den starte muted.</CheckListItem>
                <CheckListItem>
                    Ikke inkluder blinkende innhold som blinker mer enn tre ganger i sekunder.
                </CheckListItem>
            </List>
        </>
    ),
};

export default lydVideo;
