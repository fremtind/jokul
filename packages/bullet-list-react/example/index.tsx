import React from "react";
import ReactDOM from "react-dom";
import { BulletList, BulletListItem } from "../src";
import "@fremtind/jkl-bullet-list/bullet-list.scss";
import "@fremtind/jkl-core/src/core.scss";
import "./index.scss";

const UlExample = () => (
    <>
        <BulletList>
            <BulletListItem>Ruth Sims</BulletListItem>
            <BulletListItem>
                Hilda Robbins
                <BulletList>
                    <BulletListItem>Mattie Lawrence</BulletListItem>
                    <BulletListItem>Eric Huff</BulletListItem>
                </BulletList>
            </BulletListItem>
            <BulletListItem>Adam Norris</BulletListItem>
            <BulletListItem>Essie Diaz</BulletListItem>
        </BulletList>
        <BulletList className="jkl-lead">
            <BulletListItem>Ricky Wilkerson</BulletListItem>
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
    </>
);
const mountNode = document.getElementById("app");
ReactDOM.render(<UlExample />, mountNode);
