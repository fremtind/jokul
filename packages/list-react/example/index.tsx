import React from "react";
import ReactDOM from "react-dom";
import { List, ListItem } from "../src";
import "@fremtind/jkl-list/list.scss";
import "@fremtind/jkl-core/core.scss";
import "./index.scss";

const UlExample = () => (
    <>
        <List>
            <ListItem>jkl-p</ListItem>
            <ListItem>
                Linnie Gill
                <List>
                    <ListItem>Grace Cortez</ListItem>
                    <ListItem>
                        Dette er en veldig lang setning som er veldig lang og repeterende for å sjekke hvordan wrapping
                        funker. Sa jeg at setningen er lang?
                    </ListItem>
                </List>
            </ListItem>
            <ListItem>Cory Wagner</ListItem>
            <ListItem>Lora Carroll</ListItem>
        </List>
        <List ordered>
            <ListItem>jkl-p ordered</ListItem>
            <ListItem>
                Hilda Robbins
                <List ordered>
                    <ListItem>Mattie Lawrence</ListItem>
                    <ListItem>Eric Huff</ListItem>
                </List>
            </ListItem>
            <ListItem>Adam Norris</ListItem>
            <ListItem>Essie Diaz</ListItem>
        </List>
        <List className="jkl-lead">
            <ListItem>jkl-lead</ListItem>
            <ListItem>
                Linnie Gill
                <List className="jkl-lead">
                    <ListItem>Grace Cortez</ListItem>
                    <ListItem>Madge Hodges</ListItem>
                </List>
            </ListItem>
            <ListItem>Cory Wagner</ListItem>
            <ListItem>Lora Carroll</ListItem>
        </List>
        <List className="jkl-small">
            <ListItem>jkl-small</ListItem>
            <ListItem>
                Linnie Gill
                <List className="jkl-small">
                    <ListItem>Grace Cortez</ListItem>
                    <ListItem>Madge Hodges</ListItem>
                </List>
            </ListItem>
            <ListItem>Cory Wagner</ListItem>
            <ListItem>Lora Carroll</ListItem>
        </List>
        <List className="jkl-tiny">
            <ListItem>jkl-tiny</ListItem>
            <ListItem>
                Linnie Gill
                <List className="jkl-tiny">
                    <ListItem>Grace Cortez</ListItem>
                    <ListItem>Madge Hodges</ListItem>
                </List>
            </ListItem>
            <ListItem>Cory Wagner</ListItem>
            <ListItem>Lora Carroll</ListItem>
        </List>
    </>
);
const mountNode = document.getElementById("app");
ReactDOM.render(<UlExample />, mountNode);
