import React from "react";
import ReactDOM from "react-dom";
import { H1, H2, H3, H4, LeadParagraph, P, SmallText } from "../src";

import "@fremtind/jkl-core/src/typography/typography.scss";

const Typography = () => (
    <>
        <H1>H1: Hello World</H1>
        <H2>H2: This is typography</H2>
        <H3>H3: components for</H3>
        <H4>H4: jøkul design system</H4>
        <LeadParagraph>
            LeadParagraph: With these components you can say what you need in your application
        </LeadParagraph>
        <P>
            P: There is literally no limit for what you can express with these components. Long text, short text, what
            ever you need, we got you covered.
        </P>
        <SmallText>
            SmallText: Even really small text, even if we probably should not have small text everywhere.
        </SmallText>

        <H2 styledAs={"h1"}>Semantic h2, looks like h1</H2>
    </>
);

var mountNode = document.getElementById("app");
ReactDOM.render(<Typography />, mountNode);
