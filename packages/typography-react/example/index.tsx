import "@fremtind/jkl-core/src/typography/typography.scss";
import "@fremtind/jkl-core/src/normalize.scss";
import React from "react";
import ReactDOM from "react-dom";
import { H1, H2, H3, H4, LeadParagraph, P, SmallText } from "../src";

const Typography = () => (
    <>
        <H1>H1: Hello World, look at this!</H1>
        <H2>H2: This is typography</H2>
        <H3>H3: components for</H3>
        <H4>H4: jøkul design system</H4>
        <LeadParagraph>
            LeadParagraph: For half-an-hour we were muffled in a cold, damp mist, and total darkness, and had begun to
            think of going indoors when, all at once, the car burst into the pure and starlit region of the upper air.
        </LeadParagraph>
        <P>
            A paragraph (P): The sky of a deep dark blue was hung with innumerable stars, which seemed to float in the
            limpid ether, and the rolling vapours through which we had passed were drawn like a sable curtain between us
            and the lower world. The stillness was so profound that we could hear the beating of our own hearts.
        </P>
        <SmallText>
            SmallText: The unwonted sadness of her tone reminded me of her devoted life, and I turned towards her with
            new interest and sympathy. She was looking at the Evening Star, whose bright beam softened the
            irregularities of her profile, and made her almost beautiful.
        </SmallText>

        <H2 styledAs={"h1"}>Semantic h2, looks like h1</H2>
    </>
);

var mountNode = document.getElementById("app");
ReactDOM.render(<Typography />, mountNode);
