import React, { FC } from "react";
import { CodeExample, ExampleComponentProps } from "../../../doc-utils";
import { UnorderedList, OrderedList, ListItem, List, CheckListItem, CrossListItem } from "../src";

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

const orderedCodeExample = `
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
`;

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

const unorderedCodeExample = `
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
`;

const CoverageList: FC = () => (
    <List>
        <CheckListItem>Dekkes</CheckListItem>
        <CheckListItem>Dekkes også</CheckListItem>
        <CrossListItem>Dekkes ikke</CrossListItem>
        <CrossListItem>Dekkes heller ikke</CrossListItem>
    </List>
);

const coverageListCodeExample = `
<List>
    <CheckListItem>Dekkes</CheckListItem>
    <CheckListItem>Dekkes også</CheckListItem>
    <CrossListItem>Dekkes ikke</CrossListItem>
    <CrossListItem>Dekkes heller ikke</CrossListItem>
</List>
`;

export const listExamplesProps = {
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

export const listExamplesCode: CodeExample = ({ choiceValues }) => {
    let code = orderedCodeExample;
    if (choiceValues?.["Variant"] === "Unummerert") {
        code = unorderedCodeExample;
    } else if (choiceValues?.["Variant"] === "Coverage") {
        code = coverageListCodeExample;
    }
    return code;
};
