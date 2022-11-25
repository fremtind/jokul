import React, { FC, useCallback, useState } from "react";
import { CodeExample, ExampleComponentProps, ExampleKnobsProps } from "../../../doc-utils";
import { NavTabs, NavTab } from "../src";

export const navTabsExampleKnobs: ExampleKnobsProps = {};

export const NavTabsExample: FC<ExampleComponentProps> = () => {
    // Koden under stopper komponenten fra å flytte fokus og simulere klikk på neste fane.
    // Vi gjør det her for eksempelets del.
    //
    // I en app vil forhåpentligvis default oppførsel _bare funke_.
    // Om du opplever at tastaturfokus blir resatt til toppen av siden må du på en eller annen måte
    // få gjort så appen din forstår at det har skjedd en fanenavigasjon, og at fokuset skal flyttes
    // til fanen med en URL som matcher nåværende.
    //
    // Muligheter: query parameter, SessionStorage
    const [selected, setSelected] = useState("nav-eksempler");
    const hook = useCallback(
        (from: HTMLAnchorElement, to: HTMLAnchorElement) => {
            to.focus();
            setSelected(to.href.split("#")[1]);
            return false;
        },
        [setSelected],
    );

    return (
        <div style={{ width: "100%" }}>
            <NavTabs>
                <NavTab
                    aria-selected={selected === "nav-eksempler"}
                    href="#nav-eksempler"
                    onBeforeKeyboardNavigation={hook}
                >
                    Eksempler
                </NavTab>
                <NavTab aria-selected={selected === "nav-bruk"} onBeforeKeyboardNavigation={hook} href="#nav-bruk">
                    Bruk
                </NavTab>
                <NavTab aria-selected={selected === "nav-tekst"} onBeforeKeyboardNavigation={hook} href="#nav-tekst">
                    Tekst
                </NavTab>
                <NavTab aria-selected={selected === "nav-ds"} onBeforeKeyboardNavigation={hook} href="#nav-ds">
                    Design Spec
                </NavTab>
                <NavTab aria-selected={selected === "nav-kode"} onBeforeKeyboardNavigation={hook} href="#nav-kode">
                    Kode
                </NavTab>
            </NavTabs>
            <div role="tabpanel">
                Sideinnhold, eller for eksempel <code>&lt;Outlet /&gt;</code> i Remix.
            </div>
        </div>
    );
};

export const navTabsExampleCode: CodeExample = () => `
return (
    <div style={{ width: "100%" }}>
        <NavTabs>
            <NavTab aria-selected={selected === "nav-eksempler"} href="#nav-eksempler">
                Eksempler
            </NavTab>
            <NavTab aria-selected={selected === "nav-bruk"} href="#nav-bruk">
                Bruk
            </NavTab>
            <NavTab aria-selected={selected === "nav-tekst"} href="#nav-tekst">
                Tekst
            </NavTab>
            <NavTab aria-selected={selected === "nav-ds"} href="#nav-ds">
                Design Spec
            </NavTab>
            <NavTab aria-selected={selected === "nav-kode"} href="#nav-kode">
                Kode
            </NavTab>
        </NavTabs>
        <div role="tabpanel">
            Sideinnhold, eller for eksempel <code>&lt;Outlet /&gt;</code> i Remix.
        </div>
    </div>
);
`;
