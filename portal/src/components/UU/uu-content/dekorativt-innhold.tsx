import { UnorderedList, ListItem, List, CheckListItem } from "@fremtind/jkl-list-react";
import React from "react";
import { Paragraph, InlineCode } from "../../Typography";
import type { UUContent } from "./uu-content";

const dekorativtInnhold: UUContent = {
    id: "dekorativt-innhold",
    title: "Dekorativt innhold",
    tags: ["bilder"],
    wcagRules: ["1.1.1"],
    body: () => (
        <>
            <Paragraph>
                Merk at <InlineCode>alt</InlineCode>-attributt alltid skal brukes på bilder, men på dekorativt innhold
                skal den være blank (<InlineCode>alt=&quot;&quot;</InlineCode>).
            </Paragraph>
            <List>
                <CheckListItem>Rent dekorativt innhold skal ignoreres av kompenserende teknologi</CheckListItem>
            </List>
            <Paragraph>Et bilde kan være dekorativt når bildet er:</Paragraph>
            <UnorderedList>
                <ListItem>Et visuelt element som brukes tilinnramming.</ListItem>
                <ListItem>Illustrerende for nærliggende tekst, men bidrar ikke med tilleggsinformasjon.</ListItem>
                <ListItem>Beskrevet avnærliggende tekst.</ListItem>
            </UnorderedList>
        </>
    ),
};

export default dekorativtInnhold;
