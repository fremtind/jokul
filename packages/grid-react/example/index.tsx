import React from "react";
import ReactDOM from "react-dom";
import { Grid, GridElement } from "../src";
import "./style.scss";

const Buttons = () => (
    <Grid>
        <GridElement columnSpan={{ small: 1, medium: 1, large: 1 }}>
            <div style={{ backgroundColor: "red", height: "100%" }}>All</div>
        </GridElement>
        <GridElement columnSpan={{ small: 1, medium: 1, large: 1 }}>
            <div style={{ backgroundColor: "red", height: "100%" }}>All</div>
        </GridElement>
        <GridElement columnSpan={{ small: 1, medium: 1, large: 1 }}>
            <div style={{ backgroundColor: "red", height: "100%" }}>All</div>
        </GridElement>
        <GridElement columnSpan={{ small: 1, medium: 1, large: 1 }}>
            <div style={{ backgroundColor: "red", height: "100%" }}>All</div>
        </GridElement>
        <GridElement columnSpan={{ small: 0, medium: 1, large: 1 }}>
            <div style={{ backgroundColor: "red", height: "100%" }}>Not small</div>
        </GridElement>
        <GridElement columnSpan={{ small: 0, medium: 1, large: 1 }}>
            <div style={{ backgroundColor: "red", height: "100%" }}>Not small</div>
        </GridElement>
        <GridElement columnSpan={{ small: 0, medium: 1, large: 1 }}>
            <div style={{ backgroundColor: "red", height: "100%" }}>Not small</div>
        </GridElement>
        <GridElement columnSpan={{ small: 0, medium: 1, large: 1 }}>
            <div style={{ backgroundColor: "red", height: "100%" }}>Not small</div>
        </GridElement>
        <GridElement columnSpan={{ small: 0, medium: 0, large: 1 }}>
            <div style={{ backgroundColor: "red", height: "100%" }}>Only large</div>
        </GridElement>
        <GridElement columnSpan={{ small: 0, medium: 0, large: 1 }}>
            <div style={{ backgroundColor: "red", height: "100%" }}>Only large</div>
        </GridElement>
        <GridElement columnSpan={{ small: 0, medium: 0, large: 1 }}>
            <div style={{ backgroundColor: "red", height: "100%" }}>Only large</div>
        </GridElement>
        <GridElement columnSpan={{ small: 0, medium: 0, large: 1 }}>
            <div style={{ backgroundColor: "red", height: "100%" }}>Only large</div>
        </GridElement>
        <GridElement columnSpan={{ small: 1, medium: 2, large: 3 }}>
            <div style={{ backgroundColor: "deeppink", height: "100%" }}>1/4</div>
        </GridElement>
        <GridElement columnSpan={{ small: 1, medium: 2, large: 3 }}>
            <div style={{ backgroundColor: "deeppink", height: "100%" }}>1/4</div>
        </GridElement>
        <GridElement columnSpan={{ small: 1, medium: 2, large: 3 }}>
            <div style={{ backgroundColor: "deeppink", height: "100%" }}>1/4</div>
        </GridElement>
        <GridElement columnSpan={{ small: 1, medium: 2, large: 3 }}>
            <div style={{ backgroundColor: "deeppink", height: "100%" }}>1/4</div>
        </GridElement>
        <GridElement columnSpan={12}>
            <div style={{ backgroundColor: "hotpink", height: "100%" }}>full width</div>
        </GridElement>
        <GridElement columnSpan={{ small: 1, medium: 2, large: 3 }} />
        <GridElement columnSpan={{ small: 2, medium: 4, large: 6 }}>
            <div style={{ backgroundColor: "pink", height: "100%" }}>With offset</div>
        </GridElement>
        <GridElement columnSpan={{ small: 1, medium: 2, large: 3 }} />
    </Grid>
);

var mountNode = document.getElementById("app");
ReactDOM.render(<Buttons />, mountNode);
