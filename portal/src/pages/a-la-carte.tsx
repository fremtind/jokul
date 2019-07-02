import { PrimaryButton, SecondaryButton, TertiaryButton } from "@fremtind/jkl-button-react/src";
import React from "react";
import Layout from "../components/layout";
import "./a-la-carte.scss";

export default function ALaCarte() {
    return (
        <Layout>
            <h1 className="jkl-h2">Button</h1>

            <span className="jkl-component-vertical-spacer">
                <PrimaryButton onClick={() => {}}>Primary</PrimaryButton>
            </span>

            <span className="jkl-component-vertical-spacer">
                <SecondaryButton onClick={() => {}}>Secondary</SecondaryButton>
            </span>
            <span className="jkl-component-vertical-spacer">
                <TertiaryButton onClick={() => {}}>Tertiary</TertiaryButton>
            </span>
        </Layout>
    );
}
