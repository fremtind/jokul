import React from "react";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { H1, H2, H3, H4, LeadParagraph, P, SmallParagraph, TinyParagraph } from ".";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { StoryTemplate } from "../../../StoryTemplate";
import "@fremtind/jkl-core/build/css/core.css";

const headerStories = storiesOf("Typografi/Overskrifter", module);

headerStories.addDecorator(withInfo);
headerStories.addDecorator(withKnobs);

type ValidSemanticHeaders = "h1" | "h2" | "h3" | "h4";

const selectOptions: { [k in ValidSemanticHeaders]: ValidSemanticHeaders } = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
};

headerStories.add("H1", () => {
    const dummyText = text("Text", "Overskrift");
    const selectComponent = select("Component", selectOptions, "h1");
    return (
        <StoryTemplate
            title="H1"
            tldr="H1 er den semantiske og visuelt største og viktigste overskriften. Brukes til å kommunisere intensjonen til siden. Siden skal følge et naturlig hierarki av semantiske overskrifter. En siden skal kun ha en h1. Neste overskrift skal være h2. Også videre. Stilen kan endres til å se ut som en av de andre headings uten å endre semantikken."
        >
            <H1 styledAs={selectComponent}>{dummyText}</H1>
        </StoryTemplate>
    );
});
headerStories.add("H2", () => {
    const dummyText = text("Text", "Overskrift");
    const selectComponent = select("Component", selectOptions, "h2");

    return (
        <StoryTemplate title="H2" tldr="H2 brukes etter H1. Stilen kan endes uten å endre semantikken">
            <H2 styledAs={selectComponent}>{dummyText}</H2>
        </StoryTemplate>
    );
});
headerStories.add("H3", () => {
    const dummyText = text("Text", "Overskrift");
    const selectComponent = select("Component", selectOptions, "h3");

    return (
        <StoryTemplate title="H3" tldr="H3 brukes etter H2. Stilen kan endes uten å endre semantikken">
            <H3 styledAs={selectComponent}>{dummyText}</H3>
        </StoryTemplate>
    );
});
headerStories.add("H4", () => {
    const dummyText = text("Text", "Overskrift");
    const selectComponent = select("Component", selectOptions, "h4");

    return (
        <StoryTemplate title="H4" tldr="H4 brukes etter H3. Stilen kan endes uten å endre semantikken">
            <H4 styledAs={selectComponent}>{dummyText}</H4>
        </StoryTemplate>
    );
});

const textStories = storiesOf("Typografi/Tekst komponenter", module);

textStories.addDecorator(withInfo);
textStories.addDecorator(withKnobs);

textStories.add("LeadParagraph", () => {
    const dummyText = text(
        "Text",
        "Som ingress så er det viktig at innholdet er leder brukeren inn i hva som skal skje i resten av flyten. Sjansen er at mange kommer til å bare lese denne, og ikke detaljene lengre ned på siden.",
    );
    return (
        <StoryTemplate
            title="LeadParagraph"
            tldr="Brukes som ingress. Bør ikke være mer enn en per side. Brukes normalt mellom overskrift og lang form tekst eller skjemainnhold."
        >
            <LeadParagraph>{dummyText}</LeadParagraph>
        </StoryTemplate>
    );
});
textStories.add("P", () => {
    const dummyText = text(
        "Text",
        "Pass på at paragrafene på siden din ikke blir veldig lange. Ingen vil lese massive-wall-of-texts. Det kan også være lurt å ha setninger med ulik lengde, det gjør at de blir lettere for brukeren å lese.",
    );
    return (
        <StoryTemplate
            title="P"
            tldr="Kan brukes til korte og litt lengre tekster. Men hvis teksten din begynner å bli lang kan det være lurt å revudere strukturen."
        >
            <P>{dummyText}</P>
        </StoryTemplate>
    );
});
textStories.add("SmallParagraph", () => {
    const dummyText = text("Text", "Noen ganger trenger du litt ekstra plass");
    return (
        <StoryTemplate
            title="SmallParagraph"
            tldr="Brukes i interne løsninger der normal tekst blit for stor. Samme størrelse på desktop og mobil."
        >
            <SmallParagraph>{dummyText}</SmallParagraph>
        </StoryTemplate>
    );
});
textStories.add("TinyParagraph", () => {
    const dummyText = text("Text", "Vi driver med forsikring, men prøver å unngå liten tekst.");
    return (
        <StoryTemplate title="TinyParagraph" tldr="Skal kun brukes som støtteelement">
            <TinyParagraph>{dummyText}</TinyParagraph>
        </StoryTemplate>
    );
});
