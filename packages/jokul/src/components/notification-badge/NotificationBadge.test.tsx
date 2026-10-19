import { render, screen } from "@testing-library/react";
import React, { type HTMLAttributes, type ReactElement } from "react";
import { describe, expect, it, vi } from "vitest";
import { axe } from "vitest-axe";
import { Tag } from "../tag/index.js";
import { NotificationBadge } from "./NotificationBadge.js";

describe("NotificationBadge", () => {
    it("viser antallet når det er under taket", () => {
        render(<NotificationBadge count={7} />);

        expect(screen.getByText("7")).toBeInTheDocument();
    });

    it("viser taket når antallet er over", () => {
        render(<NotificationBadge count={102} />);

        expect(screen.getByText("99+")).toBeInTheDocument();
    });

    it("viser taket uten pluss når antallet er likt taket", () => {
        render(<NotificationBadge count={99} />);

        expect(screen.getByText("99")).toBeInTheDocument();
    });

    it("bruker innsendt max", () => {
        render(<NotificationBadge count={102} max={9} />);

        expect(screen.getByText("9+")).toBeInTheDocument();
    });

    it("støtter et vilkårlig tak, ikke bare hele tierpotenser", () => {
        render(<NotificationBadge count={120} max={50} />);

        expect(screen.getByText("50+")).toBeInTheDocument();
    });

    it.each([
        [0, "0+"],
        [-1, "-1+"],
        [1.5, "1.5+"],
    ])("validerer ikke taket, max=%s gir «%s»", (max, expected) => {
        render(<NotificationBadge count={5} max={max} />);

        expect(screen.getByText(expected)).toBeInTheDocument();
    });

    it("behandler desimaler numerisk, ikke som sifferlengde", () => {
        render(<NotificationBadge count={1.5} />);

        expect(screen.getByText("1.5")).toBeInTheDocument();
    });

    it("viser desimaler under 1, som fortsatt er et antall", () => {
        const { container } = render(<NotificationBadge count={0.4} />);

        expect(screen.getByText("0.4")).toBeInTheDocument();
        expect(
            container.querySelector(".jkl-notification-badge"),
        ).toHaveAttribute("data-count", "0.4");
    });

    it("formaterer ikke store antall med tusenskille", () => {
        render(<NotificationBadge count={123456} max={100000} />);

        expect(screen.getByText("100000+")).toBeInTheDocument();
    });

    it("bruker taket på Infinity", () => {
        render(<NotificationBadge count={Number.POSITIVE_INFINITY} />);

        expect(screen.getByText("99+")).toBeInTheDocument();
    });

    it("rendrer children uten varsel når count er 0", () => {
        const { container } = render(
            <NotificationBadge count={0}>
                <button type="button">Klikk</button>
            </NotificationBadge>,
        );

        expect(screen.getByText("Klikk")).toBeInTheDocument();
        expect(
            container.querySelector(".jkl-notification-badge"),
        ).not.toBeInTheDocument();

        const anchor = screen.getByRole("button");
        expect(anchor).not.toHaveAttribute("title");
        expect(anchor).not.toHaveAttribute("aria-describedby");
    });

    it("merker children som anker uten å fjerne deres egen klasse", () => {
        render(
            <NotificationBadge count={3}>
                <button type="button" className="min-klasse">
                    Send
                </button>
            </NotificationBadge>,
        );

        const anchor = screen.getByRole("button");

        expect(anchor).toHaveClass("min-klasse");
        expect(anchor).toHaveClass("jkl-notification-badge-anchor");
    });

    it("gir ankeret og varselet samme unike ankernavn", () => {
        const { container } = render(
            <NotificationBadge count={3}>
                <button type="button">Send</button>
            </NotificationBadge>,
        );

        const anchorName = screen
            .getByRole("button")
            .style.getPropertyValue("--jkl-notification-badge-anchor-name");

        expect(anchorName).toMatch(/^--jkl-notification-badge-anchor-/);
        expect(
            container
                .querySelector<HTMLElement>(".jkl-notification-badge")
                ?.style.getPropertyValue(
                    "--jkl-notification-badge-anchor-name",
                ),
        ).toBe(anchorName);
    });

    it("rendrer både antall og children når children ikke er et element", () => {
        const children = "Tekst" as unknown as ReactElement<
            HTMLAttributes<HTMLElement>
        >;

        render(<NotificationBadge count={3}>{children}</NotificationBadge>);

        expect(screen.getByText("Tekst")).toBeInTheDocument();
        expect(screen.getByText("3")).toBeInTheDocument();
    });
});

describe("NotificationBadge uten noe å vise", () => {
    it.each([
        ["0", 0],
        ["negativt", -5],
        ["NaN", Number.NaN],
    ])(
        "behandler %s antall som ingenting, både visuelt og for skjermlesere",
        (_, count) => {
            const { container } = render(
                <NotificationBadge count={count}>
                    <button type="button">Send</button>
                </NotificationBadge>,
            );

            expect(
                container.querySelector(".jkl-notification-badge"),
            ).not.toBeInTheDocument();
            expect(
                container.querySelector(".jkl-sr-only"),
            ).not.toBeInTheDocument();

            const anchor = screen.getByRole("button");
            expect(anchor).not.toHaveAttribute("title");
            expect(anchor).not.toHaveAttribute("aria-describedby");
        },
    );

    it("beholder ankeret og ankernavnet selv uten noe å vise", () => {
        render(
            <NotificationBadge count={0}>
                <button type="button">Send</button>
            </NotificationBadge>,
        );

        const anchor = screen.getByRole("button");

        expect(anchor).toHaveClass("jkl-notification-badge-anchor");
        expect(
            anchor.style.getPropertyValue(
                "--jkl-notification-badge-anchor-name",
            ),
        ).toMatch(/^--jkl-notification-badge-anchor-/);
    });

    it("beholder childens egen aria-describedby uten noe å vise", () => {
        render(
            <NotificationBadge count={0}>
                <button type="button" aria-describedby="hjelpetekst">
                    Send
                </button>
            </NotificationBadge>,
        );

        expect(screen.getByRole("button")).toHaveAttribute(
            "aria-describedby",
            "hjelpetekst",
        );
    });
});

describe("NotificationBadge og label", () => {
    it("bruker labelen ordrett", () => {
        render(<NotificationBadge count={3} label="3 produkter" />);

        expect(screen.getByText("3 produkter")).toHaveClass("jkl-sr-only");
    });

    it("bøyer ikke labelen, og legger ikke antallet til selv", () => {
        render(<NotificationBadge count={3} label="produkt" />);

        expect(screen.getByText("produkt")).toHaveClass("jkl-sr-only");
    });

    it("tolker ikke skilletegn i labelen", () => {
        render(<NotificationBadge count={3} label="produkt/produkter" />);

        expect(screen.getByText("produkt/produkter")).toHaveClass(
            "jkl-sr-only",
        );
    });

    it("lekker ikke labelen til DOM-en som attributt", () => {
        const { container } = render(
            <NotificationBadge count={3} label="3 produkter" />,
        );

        expect(
            container.querySelector(".jkl-notification-badge"),
        ).not.toHaveAttribute("label");
    });

    it("bruker labelen også i tittelen på ankeret", () => {
        render(
            <NotificationBadge count={3} label="3 produkter">
                <button type="button">Handlekurv</button>
            </NotificationBadge>,
        );

        expect(screen.getByRole("button")).toHaveAttribute(
            "title",
            "3 produkter",
        );
    });

    it("faller tilbake på en label uten antall når den ikke er satt", () => {
        render(
            <NotificationBadge count={3}>
                <button type="button">Varsler</button>
            </NotificationBadge>,
        );

        expect(screen.getByText("varsler")).toHaveClass("jkl-sr-only");
        expect(screen.getByRole("button")).toHaveAttribute("title", "varsler");
    });
});

describe("NotificationBadge og ugyldige children", () => {
    it("setter ikke ankeret når children er en liste med elementer", () => {
        const children = [
            <button type="button" key="a">
                En
            </button>,
            <button type="button" key="b">
                To
            </button>,
        ] as unknown as ReactElement<HTMLAttributes<HTMLElement>>;

        const { container } = render(
            <NotificationBadge count={3}>{children}</NotificationBadge>,
        );

        expect(screen.getByText("En")).toBeInTheDocument();
        expect(screen.getByText("To")).toBeInTheDocument();
        expect(
            container.querySelector(".jkl-notification-badge-anchor"),
        ).not.toBeInTheDocument();
        expect(screen.getByText("En")).not.toHaveAttribute("aria-describedby");
    });

    it("ankrer ikke en Fragment, og gjør det helt stille", () => {
        const consoleError = vi
            .spyOn(console, "error")
            .mockImplementation(() => {});

        const children = (
            <>
                <button type="button">En</button>
                <button type="button">To</button>
            </>
        ) as ReactElement<HTMLAttributes<HTMLElement>>;

        const { container } = render(
            <NotificationBadge count={3}>{children}</NotificationBadge>,
        );

        // isValidElement er sann for en Fragment, så cloneElement setter
        // propsene på Fragmenten, der de forsvinner uten noen advarsel.
        expect(
            container.querySelector(".jkl-notification-badge-anchor"),
        ).not.toBeInTheDocument();
        expect(consoleError).not.toHaveBeenCalled();

        consoleError.mockRestore();
    });

    it("overstyrer en id konsumenten har satt selv", () => {
        const { container } = render(
            <NotificationBadge count={3} id="min-id">
                <button type="button">Send</button>
            </NotificationBadge>,
        );

        const badge = container.querySelector(".jkl-notification-badge");

        expect(badge?.id).toMatch(/^jkl-notification-badge-/);
        expect(badge?.id).not.toBe("min-id");
        expect(screen.getByRole("button")).toHaveAttribute(
            "aria-describedby",
            badge?.id,
        );
    });

    it("beholder childens egen style når ankernavnet legges til", () => {
        render(
            <NotificationBadge count={3}>
                <button type="button" style={{ color: "red" }}>
                    Send
                </button>
            </NotificationBadge>,
        );

        const anchor = screen.getByRole("button");

        expect(anchor.style.color).toBe("red");
        expect(
            anchor.style.getPropertyValue(
                "--jkl-notification-badge-anchor-name",
            ),
        ).toMatch(/^--jkl-notification-badge-anchor-/);
    });

    it("overskriver ikke en tittel children har satt selv", () => {
        render(
            <NotificationBadge count={3}>
                <button type="button" title="Handlekurv">
                    Send
                </button>
            </NotificationBadge>,
        );

        expect(screen.getByRole("button")).toHaveAttribute(
            "title",
            "Handlekurv",
        );
    });
});

describe("NotificationBadge i prikk-modus", () => {
    it("viser ingen tall", () => {
        render(<NotificationBadge count={120} hideCounter />);

        expect(screen.queryByText("120")).not.toBeInTheDocument();
        expect(screen.queryByText("99+")).not.toBeInTheDocument();
    });

    it("setter modifier-klassen", () => {
        const { container } = render(
            <NotificationBadge count={120} hideCounter />,
        );

        expect(container.querySelector(".jkl-notification-badge")).toHaveClass(
            "jkl-notification-badge--dot",
        );
    });

    it("rendrer ingen prikk når det ikke er noe å vise", () => {
        const { container } = render(
            <NotificationBadge count={0} hideCounter />,
        );

        expect(
            container.querySelector(".jkl-notification-badge"),
        ).not.toBeInTheDocument();
        expect(container.querySelector(".jkl-sr-only")).not.toBeInTheDocument();
    });
});

describe("NotificationBadge og urgent", () => {
    it("markerer varselet som urgent", () => {
        const { container } = render(<NotificationBadge count={3} urgent />);

        expect(
            container.querySelector(".jkl-notification-badge"),
        ).toHaveAttribute("data-urgent", "true");
    });

    it("er ikke urgent som standard", () => {
        const { container } = render(<NotificationBadge count={3} />);

        expect(
            container.querySelector(".jkl-notification-badge"),
        ).toHaveAttribute("data-urgent", "false");
    });

    it("endrer ikke teksten til skjermlesere", () => {
        render(<NotificationBadge count={3} urgent label="3 varsler" />);

        expect(screen.getByText("3 varsler")).toHaveClass("jkl-sr-only");
    });

    it("rendrer ingenting når det ikke er noe å vise", () => {
        const { container } = render(<NotificationBadge count={0} urgent />);

        expect(
            container.querySelector(".jkl-notification-badge"),
        ).not.toBeInTheDocument();
    });
});

describe("NotificationBadge og skjermlesere", () => {
    it("legger labelen i skjult tekst for skjermlesere", () => {
        render(<NotificationBadge count={120} label="120 varsler" />);

        expect(screen.getByText("120 varsler")).toHaveClass("jkl-sr-only");
    });

    it("leser opp labelen når varselet ligger inni et annet element", () => {
        render(
            <Tag>
                <NotificationBadge
                    count={120}
                    hideCounter
                    label="120 varsler"
                />
                Eksempel
            </Tag>,
        );

        expect(screen.getByText("120 varsler")).toHaveClass("jkl-sr-only");
    });

    it("peker children på varselet med aria-describedby", () => {
        const { container } = render(
            <NotificationBadge count={3}>
                <button type="button">Send</button>
            </NotificationBadge>,
        );

        const describedBy = screen
            .getByRole("button")
            .getAttribute("aria-describedby");

        expect(describedBy).toMatch(/^jkl-notification-badge-/);
        expect(describedBy).toBe(
            container.querySelector(".jkl-notification-badge")?.id,
        );
    });

    it("beholder childens egen aria-describedby", () => {
        render(
            <NotificationBadge count={3}>
                <button type="button" aria-describedby="hjelpetekst">
                    Send
                </button>
            </NotificationBadge>,
        );

        expect(
            screen.getByRole("button").getAttribute("aria-describedby"),
        ).toMatch(/^hjelpetekst jkl-notification-badge-/);
    });
});

describe("a11y", () => {
    it("notification badge should be a11y compliant", async () => {
        const { container } = render(
            <NotificationBadge count={23} max={9}>
                <button type="button">Varsler</button>
            </NotificationBadge>,
        );

        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    it("notification badge in dot mode should be a11y compliant", async () => {
        const { container } = render(
            <NotificationBadge count={120} hideCounter>
                <button type="button">Varsler</button>
            </NotificationBadge>,
        );

        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    it("notification badge without anything to show should be a11y compliant", async () => {
        const { container } = render(
            <NotificationBadge count={0}>
                <button type="button">Varsler</button>
            </NotificationBadge>,
        );

        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    it("urgent notification badge should be a11y compliant", async () => {
        const { container } = render(
            <NotificationBadge count={3} urgent>
                <button type="button">Varsler</button>
            </NotificationBadge>,
        );

        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
