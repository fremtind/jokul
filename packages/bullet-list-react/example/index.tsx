import React from "react";
import ReactDOM from "react-dom";
import { Ul, Li } from "../src";
import "@fremtind/jkl-bullet-list/bullet-list.scss";
import "@fremtind/jkl-core/src/core.scss"; // TODO: remove

const UlExample = () => (
    <>
        <Ul>
            <Li>Ruth Sims</Li>
            <Li>
                Hilda Robbins
                <Ul>
                    <Li>Mattie Lawrence</Li>
                    <Li>Eric Huff</Li>
                </Ul>
            </Li>
            <Li>Adam Norris</Li>
            <Li>Essie Diaz</Li>
        </Ul>
        <Ul lead>
            <Li>Ricky Wilkerson</Li>
            <Li>
                Linnie Gill
                <Ul>
                    <Li>Grace Cortez</Li>
                    <Li>
                        Madge Hodges
                        <Ul>
                            <Li>Somebody</Li>
                        </Ul>
                    </Li>
                </Ul>
            </Li>
            <Li>Cory Wagner</Li>
            <Li>Lora Carroll</Li>
        </Ul>
    </>
);
const mountNode = document.getElementById("app");
ReactDOM.render(<UlExample />, mountNode);
