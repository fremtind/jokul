import React from "react";
import { Example } from "../components";
import { UnorderedList, OrderedList, ListItem } from "@fremtind/jkl-list-react";
import "@fremtind/jkl-list/list.min.css";

import listType from "!raw-loader!@fremtind/jkl-list-react/build/List.d.ts";
import listItemType from "!raw-loader!@fremtind/jkl-list-react/build/ListItem.d.ts";

const example = `<>
    <UnorderedList>
        <ListItem>Ruth Sims</ListItem>
        <ListItem>
            Hilda Robbins
            <UnorderedList>
                <ListItem>Mattie Lawrence</ListItem>
                <ListItem>Eric Huff</ListItem>
            </UnorderedList>
        </ListItem>
        <ListItem>Adam Norris</ListItem>
        <ListItem>Essie Diaz</ListItem>
    </UnorderedList>
    <UnorderedList className="jkl-lead">
        <ListItem>Ricky Wilkerson</ListItem>
        <ListItem>
            Linnie Gill
            <UnorderedList className="jkl-lead">
                <ListItem>Grace Cortez</ListItem>
                <ListItem>Madge Hodges</ListItem>
            </UnorderedList>
        </ListItem>
        <ListItem>Cory Wagner</ListItem>
        <ListItem>Lora Carroll</ListItem>
    </UnorderedList>
    <OrderedList>
        <ListItem>Eunice Orn</ListItem>
        <ListItem>
            Hilda Robbins
            <OrderedList>
                <ListItem>Derek Deckow</ListItem>
                <ListItem>Juliet Shanahan</ListItem>
            </OrderedList>
        </ListItem>
        <ListItem>Miles Hettinger</ListItem>
        <ListItem>Vickie Steuber</ListItem>
    </OrderedList>
</>`;

const exampleImport = `import { UnorderedList, OrderedList, ListItem } from "@fremtind/jkl-list-react";
import "@fremtind/jkl-list/list.min.css";`;

const ListExample = () => (
    <Example
        exampleComponents={{ UnorderedList, OrderedList, ListItem }}
        exampleCode={example}
        types={[
            { name: "List", type: listType },
            { name: "ListItem", type: listItemType },
        ]}
        exampleImport={exampleImport}
    />
);

export default ListExample;
