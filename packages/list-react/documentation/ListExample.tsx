import React, { VFC } from "react";
import { UnorderedList, OrderedList, ListItem, List, CheckListItem, CrossListItem } from "../src";

export const Ordered: VFC = () => (
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

export const Unordered: VFC = () => (
    <UnorderedList>
        <ListItem>Listeelement 1</ListItem>
        <ListItem>Listeelement 2</ListItem>
        <ListItem>Listelement 3</ListItem>
    </UnorderedList>
);

export const Indent: VFC = () => (
    <UnorderedList>
        <ListItem>
            Listeelement 1
            <UnorderedList>
                <ListItem>Nøstet listeelement 1</ListItem>
                <ListItem>Nøstet listeelement 2</ListItem>
            </UnorderedList>
        </ListItem>
        <ListItem>Listelement 2</ListItem>
    </UnorderedList>
);

export const IconedList: VFC = () => (
    <List>
        <CheckListItem>Dekkes</CheckListItem>
        <CheckListItem>Dekkes også</CheckListItem>
        <CrossListItem>Dekkes ikke</CrossListItem>
        <CrossListItem>Dekkes heller ikke</CrossListItem>
    </List>
);

export const ListExample: VFC = () => (
    <section>
        <Ordered />
        <Unordered />
        <Indent />
        <IconedList />
    </section>
);
