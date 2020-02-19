import React from "react";
import { UnorderedList, OrderedList, ListItem } from "../src";
import "@fremtind/jkl-list/list.scss";
import "@fremtind/jkl-core/core.scss";

export const Ordered = () => (
    <section>
        <h3 className="jkl-h5">Nummerert liste</h3>
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
            <ListItem>Steg 5</ListItem>
            <ListItem>Steg 6</ListItem>
            <ListItem>Steg 7</ListItem>
            <ListItem>Steg 8</ListItem>
            <ListItem>Steg 9</ListItem>
            <ListItem>Steg 10</ListItem>
        </OrderedList>
    </section>
);

export const Unordered = () => (
    <section>
        <h3 className="jkl-h5">Standard liste</h3>
        <UnorderedList>
            <ListItem>Listeelement 1</ListItem>
            <ListItem>Listeelement 2</ListItem>
            <ListItem>Listelement 3</ListItem>
        </UnorderedList>
        <br></br>
        <h3 className="jkl-h5">Mobile/Compact liste</h3>
        <UnorderedList className="jkl-small">
            <ListItem>Listeelement 1</ListItem>
            <ListItem>Listeelement 2</ListItem>
            <ListItem>Listelement 3</ListItem>
        </UnorderedList>
    </section>
);

export const Indent = () => (
    <section>
        <h3 className="jkl-h5">Nøstet liste</h3>
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
    </section>
);

const Example = () => (
    <section className="jkl-spacing--top-3 jkl-spacing--bottom-3">
        <Ordered />
        <Unordered />
        <Indent />
    </section>
);

export default Example;
