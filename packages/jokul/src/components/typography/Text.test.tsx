import { render } from "@testing-library/react";
import React, { createRef } from "react";
import { describe, expect, it } from "vitest";
import { axe } from "vitest-axe";
import { Text } from "./Text.js";

describe("Text", () => {
    it("rendres som <p> som standard", () => {
        const { container } = render(<Text>Brødtekst</Text>);

        const element = container.firstElementChild;

        expect(element?.tagName).toBe("P");
        expect(element).toHaveClass("jkl-text");
    });

    it("rendrer elementet satt via `as`", () => {
        const { getByText } = render(<Text as="strong">Viktig</Text>);

        expect(getByText("Viktig").tagName).toBe("STRONG");
    });

    it("rendrer som <label> med videresendt `htmlFor`", () => {
        const { container } = render(
            <Text as="label" htmlFor="epost">
                E-post
            </Text>,
        );

        const label = container.querySelector("label");
        expect(label).toBeInTheDocument();
        expect(label).toHaveTextContent("E-post");
        expect(label).toHaveAttribute("for", "epost");
        expect(label).toHaveClass("jkl-text");
    });

    it("setter `data-text-size` når `size` er satt", () => {
        const { getByText } = render(<Text size="l">Stor</Text>);

        expect(getByText("Stor")).toHaveAttribute("data-text-size", "l");
    });

    it("støtter `xs` som minste størrelse", () => {
        const { getByText } = render(<Text size="xs">Bitteliten</Text>);

        expect(getByText("Bitteliten")).toHaveAttribute("data-text-size", "xs");
    });

    it("bruker `m` som default når `size` er utelatt", () => {
        const { getByText } = render(<Text>Default</Text>);

        expect(getByText("Default")).toHaveAttribute("data-text-size", "m");
    });

    it("setter `data-bold` når `bold` er true", () => {
        const { getByText } = render(<Text bold>Uthevet</Text>);

        expect(getByText("Uthevet")).toHaveAttribute("data-bold");
    });

    it("setter ikke `data-bold` når `bold` er false", () => {
        const { getByText } = render(<Text bold={false}>Vanlig</Text>);

        expect(getByText("Vanlig")).not.toHaveAttribute("data-bold");
    });

    it("setter `data-short` når `short` er true", () => {
        const { getByText } = render(<Text short>Tett</Text>);

        expect(getByText("Tett")).toHaveAttribute("data-short");
    });

    it("legger til `jkl-sr-only` når `srOnly` er true", () => {
        const { getByText } = render(<Text srOnly>Skjult</Text>);

        expect(getByText("Skjult")).toHaveClass("jkl-text", "jkl-sr-only");
    });

    it("videresender ekstra className", () => {
        const { getByText } = render(
            <Text className="egen-klasse">Med klasse</Text>,
        );

        expect(getByText("Med klasse")).toHaveClass("jkl-text", "egen-klasse");
    });

    it("videresender ref til det underliggende elementet", () => {
        const ref = createRef<HTMLParagraphElement>();

        render(<Text ref={ref}>Med ref</Text>);

        expect(ref.current).toBeInstanceOf(HTMLParagraphElement);
    });

    it("videresender ekstra DOM-attributter via rest", () => {
        const { getByText } = render(
            <Text aria-label="etikett" data-testid="text">
                Innhold
            </Text>,
        );

        const element = getByText("Innhold");
        expect(element).toHaveAttribute("aria-label", "etikett");
        expect(element).toHaveAttribute("data-testid", "text");
    });

    it("passerer axe i standardtilstand", async () => {
        const { container } = render(<Text>Tilgjengelig tekst</Text>);

        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
