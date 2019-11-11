import React from "react";
import ReactDOM from "react-dom";
import { BulletList, BulletListItem } from "../src";
import "@fremtind/jkl-bullet-list/bullet-list.scss";
import "@fremtind/jkl-core/core.scss";
import "./index.scss";

const UlExample = () => (
    <>
        <BulletList>
            <BulletListItem>jkl-p</BulletListItem>
            <BulletListItem>
                Linnie Gill
                <BulletList>
                    <BulletListItem>Grace Cortez</BulletListItem>
                    <BulletListItem>
                        Dette er en veldig lang setning som er veldig lang og repeterende for å sjekke hvordan wrapping
                        funker. Sa jeg at setningen er lang?
                        <BulletList>
                            <BulletListItem>Somebody</BulletListItem>
                        </BulletList>
                    </BulletListItem>
                </BulletList>
            </BulletListItem>
            <BulletListItem>Cory Wagner</BulletListItem>
            <BulletListItem>Lora Carroll</BulletListItem>
        </BulletList>
        <BulletList ordered>
            <BulletListItem>jkl-p ordered</BulletListItem>
            <BulletListItem>
                Hilda Robbins
                <BulletList ordered>
                    <BulletListItem>Mattie Lawrence</BulletListItem>
                    <BulletListItem>
                        Eric Huff
                        <BulletList ordered>
                            <BulletListItem>Hei</BulletListItem>
                        </BulletList>
                    </BulletListItem>
                </BulletList>
            </BulletListItem>
            <BulletListItem>Adam Norris</BulletListItem>
            <BulletListItem>Essie Diaz</BulletListItem>
        </BulletList>
        <BulletList className="jkl-lead">
            <BulletListItem>jkl-lead</BulletListItem>
            <BulletListItem>
                Linnie Gill
                <BulletList className="jkl-lead">
                    <BulletListItem>Grace Cortez</BulletListItem>
                    <BulletListItem>
                        Madge Hodges
                        <BulletList className="jkl-lead">
                            <BulletListItem>Somebody</BulletListItem>
                        </BulletList>
                    </BulletListItem>
                </BulletList>
            </BulletListItem>
            <BulletListItem>Cory Wagner</BulletListItem>
            <BulletListItem>Lora Carroll</BulletListItem>
        </BulletList>
        <BulletList className="jkl-small">
            <BulletListItem>jkl-small</BulletListItem>
            <BulletListItem>
                Linnie Gill
                <BulletList className="jkl-small">
                    <BulletListItem>Grace Cortez</BulletListItem>
                    <BulletListItem>
                        Madge Hodges
                        <BulletList className="jkl-small">
                            <BulletListItem>Somebody</BulletListItem>
                        </BulletList>
                    </BulletListItem>
                </BulletList>
            </BulletListItem>
            <BulletListItem>Cory Wagner</BulletListItem>
            <BulletListItem>Lora Carroll</BulletListItem>
        </BulletList>
        <BulletList className="jkl-tiny">
            <BulletListItem>jkl-tiny</BulletListItem>
            <BulletListItem>
                Linnie Gill
                <BulletList className="jkl-tiny">
                    <BulletListItem>Grace Cortez</BulletListItem>
                    <BulletListItem>
                        Madge Hodges
                        <BulletList className="jkl-tiny">
                            <BulletListItem>Somebody</BulletListItem>
                        </BulletList>
                    </BulletListItem>
                </BulletList>
            </BulletListItem>
            <BulletListItem>Cory Wagner</BulletListItem>
            <BulletListItem>Lora Carroll</BulletListItem>
        </BulletList>
    </>
);
const mountNode = document.getElementById("app");
ReactDOM.render(<UlExample />, mountNode);
