import { ListItem, UnorderedList } from "@fremtind/jkl-list-react";
import React from "react";
import { Paragraph } from "../../Typography";
import type { UUContent } from "./uu-content";

const tidsbegrensning: UUContent = {
    id: "tidsbegrensning",
    title: "Tidsbegrensning",
    tags: ["innlogging"],
    wcagRules: ["2.2.1"],
    body: () => (
        <>
            <Paragraph>Dersom tjenesten inkluderer en tidsbegrensning gjelder minst ett av følgende:</Paragraph>
            <UnorderedList>
                <ListItem>Brukeren kan slå av tidsbegrensningen.</ListItem>
                <ListItem>Brukeren kan øke tidsbegrensningen med minst 10 ganger standardverdi.</ListItem>
                <ListItem>
                    Brukeren varsles før tiden går ut og skal få minst 20 sekunder til å forlenge den minst 10 ganger.
                    For eksempel &lsquo;Trykk på mellomromstasten&rsquo;.
                </ListItem>
                <ListItem>
                    Tidsbegrensningen er en nødvendig del og det finnes ikke noe alternativ (for eksempel auksjon).
                </ListItem>
                <ListItem>Tidsbegrensningen varer lenger enn 20 timer.</ListItem>
            </UnorderedList>
        </>
    ),
};

export default tidsbegrensning;
