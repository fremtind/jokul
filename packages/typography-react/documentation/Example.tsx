import React from "react";
import { H1, H2, H3, H4, H5, LeadParagraph, P, SmallParagraph, TinyParagraph, Link } from "../src";

import "@fremtind/jkl-core/core.min.css";

const Example = () => (
    <section className="jkl-spacing--top-3 jkl-spacing--bottom-3">
        <H1>H1: Hello World, look at this!</H1>
        <H2>H2: This is typography</H2>
        <H3>H3: components for</H3>
        <H4>H4: jøkul design system</H4>
        <H5>H5: This is the last heading component</H5>
        <LeadParagraph>
            LeadParagraph: For half-an-hour we were muffled in a cold, damp mist, and total darkness, and had begun to
            think of going indoors when, all at once, the car burst into the pure and starlit region of the upper air.
        </LeadParagraph>
        <P>
            A paragraph (P): The sky of a deep dark blue was hung with innumerable stars, which seemed to float in the
            limpid ether, and the rolling vapours through which we had passed were drawn like a sable curtain between us
            and the lower world. The stillness was so profound that we could hear the beating of our own hearts.
        </P>
        <SmallParagraph>
            SmallParagraph (same size desktop/mobile): The telescope was very powerful for its size, and showed the
            dusky night side of the planet against the brilliant crescent of the day like the &quot;new moon in the arms
            of the old,&quot; or, as Miss Carmichael said, &quot;like an amethyst in a silver clasp.&quot;
        </SmallParagraph>
        <TinyParagraph>
            TinyParagraph: The unwonted sadness of her tone reminded me of her devoted life, and I turned towards her
            with new interest and sympathy. She was looking at the Evening Star, whose bright beam softened the
            irregularities of her profile, and made her almost beautiful.
        </TinyParagraph>

        <H2 styledAs="h1">Semantic h2, looks like h1</H2>
        <H1 styledAs="h3">Semantic h1, looks like h3</H1>
        <P>
            A paragraph (P): The sky of a deep dark blue was hung with innumerable stars, which seemed to float in the
            limpid ether, and the rolling vapours through which we had passed were drawn like a sable curtain between us
            and the lower world. The <Link href="#">stillness </Link> was so profound that we could hear the beating of
            our own hearts.
        </P>

        <div style={{ backgroundColor: "#000", color: "#fafafa" }}>
            <P>
                A paragraph (P): The sky of a deep dark blue was hung with innumerable stars, which seemed to float in
                the limpid ether, and the rolling vapours through which we had passed were drawn like a sable curtain
                between us and the lower world. The{" "}
                <Link negative href="#">
                    stillness
                </Link>{" "}
                was so profound that we could hear the beating of our own hearts.
            </P>
        </div>
        <Link href="#">Go away</Link>
    </section>
);
export default Example;
