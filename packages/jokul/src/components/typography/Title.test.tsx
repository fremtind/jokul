import { render } from "@testing-library/react";
import React, { createRef } from "react";
import { describe, expect, it } from "vitest";
import { axe } from "vitest-axe";
import { Title } from "./Title.js";

describe("Title", () => {
    it("rendres som <h2> med size=l som standard", () => {
        const { getByRole } = render(<Title>Forside</Title>);

        const heading = getByRole("heading", { level: 2 });
        expect(heading).toHaveClass("jkl-title");
        expect(heading).toHaveAttribute("data-text-size", "l");
    });

    it("rendrer riktig heading-nivå satt via `as`", () => {
        const { getByRole } = render(<Title as="h1">Hovedtittel</Title>);

        expect(getByRole("heading", { level: 1 })).toHaveTextContent(
            "Hovedtittel",
        );
    });

    it("rendrer alle heading-nivå h1 til h6", () => {
        const levels: Array<"h1" | "h2" | "h3" | "h4" | "h5" | "h6"> = [
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
        ];

        for (const level of levels) {
            const { getByRole, unmount } = render(
                <Title as={level}>{level}</Title>,
            );

            expect(
                getByRole("heading", { level: Number(level.slice(1)) }),
            ).toBeInTheDocument();

            unmount();
        }
    });

    it("rendrer som <label> med videresendt `htmlFor`", () => {
        const { container } = render(
            <Title as="label" htmlFor="epost">
                E-post
            </Title>,
        );

        const label = container.querySelector("label");
        expect(label).toBeInTheDocument();
        expect(label).toHaveTextContent("E-post");
        expect(label).toHaveAttribute("for", "epost");
        expect(label).toHaveClass("jkl-title");
    });

    it("rendrer som <legend>", () => {
        const { container } = render(
            <fieldset>
                <Title as="legend">Kontaktinformasjon</Title>
            </fieldset>,
        );

        const legend = container.querySelector("legend");
        expect(legend).toBeInTheDocument();
        expect(legend).toHaveTextContent("Kontaktinformasjon");
        expect(legend).toHaveClass("jkl-title");
    });

    it("setter `data-text-size` for oppgitt size", () => {
        const { getByRole } = render(
            <Title as="h2" size="s">
                Mindre
            </Title>,
        );

        expect(getByRole("heading", { level: 2 })).toHaveAttribute(
            "data-text-size",
            "s",
        );
    });

    it("støtter `xs` og `xl` som ytterpunkter", () => {
        const { getByRole: getBySmall, unmount } = render(
            <Title as="h2" size="xs">
                Minst
            </Title>,
        );
        expect(getBySmall("heading", { level: 2 })).toHaveAttribute(
            "data-text-size",
            "xs",
        );
        unmount();

        const { getByRole: getByLarge } = render(
            <Title as="h2" size="xl">
                Størst
            </Title>,
        );
        expect(getByLarge("heading", { level: 2 })).toHaveAttribute(
            "data-text-size",
            "xl",
        );
    });

    it("legger til `jkl-sr-only` når `srOnly` er true", () => {
        const { getByRole } = render(
            <Title as="h2" srOnly>
                Skjult
            </Title>,
        );

        expect(getByRole("heading", { level: 2 })).toHaveClass(
            "jkl-title",
            "jkl-sr-only",
        );
    });

    it("videresender ekstra className", () => {
        const { getByRole } = render(
            <Title className="egen-klasse">Med klasse</Title>,
        );

        expect(getByRole("heading", { level: 2 })).toHaveClass(
            "jkl-title",
            "egen-klasse",
        );
    });

    it("videresender ref til det underliggende heading-elementet", () => {
        const ref = createRef<HTMLHeadingElement>();

        render(
            <Title as="h1" ref={ref}>
                Med ref
            </Title>,
        );

        expect(ref.current).toBeInstanceOf(HTMLHeadingElement);
        expect(ref.current?.tagName).toBe("H1");
    });

    it("videresender ekstra DOM-attributter via rest", () => {
        const { getByRole } = render(
            <Title as="h2" id="seksjon-tittel" aria-label="etikett">
                Innhold
            </Title>,
        );

        const heading = getByRole("heading", { level: 2 });
        expect(heading).toHaveAttribute("id", "seksjon-tittel");
        expect(heading).toHaveAttribute("aria-label", "etikett");
    });

    it("passerer axe i standardtilstand", async () => {
        const { container } = render(<Title as="h1">Tilgjengelig</Title>);

        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
