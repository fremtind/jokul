import React from "react";
import { Example } from "../components";
import { List, ListItem } from "@fremtind/jkl-list-react";
import "@fremtind/jkl-list/list.min.css";

import listType from "!raw-loader!@fremtind/jkl-list-react/build/List.d.ts";
import listItemType from "!raw-loader!@fremtind/jkl-list-react/build/ListItem.d.ts";

const example = `<>
    <List>
        <ListItem>Ruth Sims</ListItem>
        <ListItem>
            Hilda Robbins
            <List>
                <ListItem>Mattie Lawrence</ListItem>
                <ListItem>Eric Huff</ListItem>
            </List>
        </ListItem>
        <ListItem>Adam Norris</ListItem>
        <ListItem>Essie Diaz</ListItem>
    </List>
    <List className="jkl-lead">
        <ListItem>Ricky Wilkerson</ListItem>
        <ListItem>
            Linnie Gill
            <List className="jkl-lead">
                <ListItem>Grace Cortez</ListItem>
                <ListItem>
                    Madge Hodges
                    <List className="jkl-lead">
                        <ListItem>Somebody</ListItem>
                    </List>
                </ListItem>
            </List>
        </ListItem>
        <ListItem>Cory Wagner</ListItem>
        <ListItem>Lora Carroll</ListItem>
    </List>
    <List ordered>
        <ListItem>Eunice Orn</ListItem>
        <ListItem>
            Hilda Robbins
            <List ordered>
                <ListItem>Derek Deckow</ListItem>
                <ListItem>Juliet Shanahan</ListItem>
            </List>
        </ListItem>
        <ListItem>Miles Hettinger</ListItem>
        <ListItem>Vickie Steuber</ListItem>
    </List>
</>`;

const exampleImport = `import { List, ListItem } from "@fremtind/jkl-list-react";
import "@fremtind/jkl-list/list.min.css";`;

const ListExample = () => (
    <Example
        exampleComponents={{ List, ListItem }}
        exampleCode={example}
        types={[{ name: "List", type: listType }, { name: "ListItem", type: listItemType }]}
        exampleImport={exampleImport}
    />
);

export default ListExample;
