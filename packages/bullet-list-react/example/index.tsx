import React from "react";
import ReactDOM from "react-dom";
import { Ul, Li } from "../src";
import "@fremtind/jkl-bullet-list/bullet-list.scss";

const UlExample = () => (
    <>
        <Ul>
            <Li>Ruth Sims</Li>
            <Li>Hilda Robbins</Li>
            <Li nested>Mattie Lawrence</Li>
            <Li nested>Eric Huff</Li>
            <Li>Adam Norris</Li>
            <Li>Essie Diaz</Li>
        </Ul>
        <Ul lead>
            <Li>Ricky Wilkerson</Li>
            <Li>Linnie Gill</Li>
            <Li nested>Grace Cortez</Li>
            <Li nested>Madge Hodges</Li>
            <Li>Cory Wagner</Li>
            <Li>Lora Carroll</Li>
        </Ul>
    </>
);
const mountNode = document.getElementById("app");
ReactDOM.render(<UlExample />, mountNode);
