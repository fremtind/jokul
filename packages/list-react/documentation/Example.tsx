import React from "react";
import { UnorderedList, OrderedList, ListItem } from "../src";
import "@fremtind/jkl-list/list.scss";
import "@fremtind/jkl-core/core.scss";

export const Ordered = () => (
    <section className="jkl-spacing--top-3 jkl-spacing--bottom-3">
        <OrderedList className="jkl-spacing--all-4">
            <ListItem>jkl-p ordered</ListItem>
            <ListItem>
                Hilda Robbins
                <OrderedList>
                    <ListItem>Mattie Lawrence</ListItem>
                    <ListItem>Eric Huff</ListItem>
                </OrderedList>
            </ListItem>
            <ListItem>Adam Norris</ListItem>
            <ListItem>Essie Diaz</ListItem>
        </OrderedList>
    </section>
);

export const Unordered = () => (
    <section className="jkl-spacing--top-3 jkl-spacing--bottom-3">
        <UnorderedList className="jkl-spacing--all-4">
            <ListItem>jkl-p</ListItem>
            <ListItem>
                Linnie Gill
                <UnorderedList>
                    <ListItem>Grace Cortez</ListItem>
                    <ListItem>
                        Dette er en veldig lang setning som er veldig lang og repeterende for å sjekke hvordan wrapping
                        funker. Sa jeg at setningen er lang?
                    </ListItem>
                </UnorderedList>
            </ListItem>
            <ListItem>Cory Wagner</ListItem>
            <ListItem>Lora Carroll</ListItem>
        </UnorderedList>

        <UnorderedList className="jkl-lead jkl-spacing--all-4">
            <ListItem>jkl-lead</ListItem>
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
        <UnorderedList className="jkl-small jkl-spacing--all-4">
            <ListItem>jkl-small</ListItem>
            <ListItem>
                Linnie Gill
                <UnorderedList className="jkl-small">
                    <ListItem>Grace Cortez</ListItem>
                    <ListItem>Madge Hodges</ListItem>
                </UnorderedList>
            </ListItem>
            <ListItem>Cory Wagner</ListItem>
            <ListItem>Lora Carroll</ListItem>
        </UnorderedList>
        <UnorderedList className="jkl-tiny jkl-spacing--all-4">
            <ListItem>jkl-tiny</ListItem>
            <ListItem>
                Linnie Gill
                <UnorderedList className="jkl-tiny">
                    <ListItem>Grace Cortez</ListItem>
                    <ListItem>Madge Hodges</ListItem>
                </UnorderedList>
            </ListItem>
            <ListItem>Cory Wagner</ListItem>
            <ListItem>Lora Carroll</ListItem>
        </UnorderedList>
    </section>
);

const Example = () => (
    <section className="jkl-spacing--top-3 jkl-spacing--bottom-3">
        <Ordered />
        <Unordered />
    </section>
);

export default Example;
