import { ExampleComponentProps, ExampleKnobsProps } from "doc-utils/index.js";
import React, { FC } from "react";
import { List, OrderedList, UnorderedList } from "../List.js";
import { CheckListItem, CrossListItem, ListItem } from "../ListItem.js";

const Ordered: FC = () => (
    <OrderedList>
        <ListItem>Steg 1</ListItem>
        <ListItem>
            Steg 2
            <OrderedList>
                <ListItem>Steg 2a</ListItem>
                <ListItem>Steg 2b</ListItem>
            </OrderedList>
        </ListItem>
        <ListItem>Steg 3</ListItem>
        <ListItem>Steg 4</ListItem>
    </OrderedList>
);

const Unordered: FC = () => (
    <UnorderedList>
        <ListItem>Element 1</ListItem>
        <ListItem>
            Element 2
            <UnorderedList>
                <ListItem>Nøstet 1</ListItem>
                <ListItem>Nøstet 2</ListItem>
            </UnorderedList>
        </ListItem>
        <ListItem>Element 3</ListItem>
        <ListItem>Element 4</ListItem>
    </UnorderedList>
);

const CoverageList: FC = () => (
    <List>
        <CheckListItem>Dekkes</CheckListItem>
        <CheckListItem>Dekkes også</CheckListItem>
        <CrossListItem>Dekkes ikke</CrossListItem>
        <CrossListItem>Dekkes heller ikke</CrossListItem>
    </List>
);

export const knobs: ExampleKnobsProps = {
    choiceProps: [
        {
            name: "Variant",
            values: ["Ordered", "Unordered", "Coverage"],
            defaultValue: 0,
        },
    ],
};

export const ListExamples: FC<ExampleComponentProps> = ({ choiceValues }) => {
    let C = Ordered;
    if (choiceValues?.["Variant"] === "Unordered") {
        C = Unordered;
    } else if (choiceValues?.["Variant"] === "Coverage") {
        C = CoverageList;
    }
    return <C />;
};
