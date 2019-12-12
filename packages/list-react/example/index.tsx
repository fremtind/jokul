import React from "react";
import ReactDOM from "react-dom";
import { UnorderedList, OrderedList, ListItem } from "../src";
import "@fremtind/jkl-list/list.scss";
import "@fremtind/jkl-core/core.scss";
import "./index.scss";

const UlExample = () => (
    <>
        <UnorderedList>
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
        <OrderedList>
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
        <UnorderedList className="jkl-lead">
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
        <UnorderedList className="jkl-small">
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
        <UnorderedList className="jkl-tiny">
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
    </>
);
const mountNode = document.getElementById("app");
ReactDOM.render(<UlExample />, mountNode);
