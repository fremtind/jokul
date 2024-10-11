import React, { FC, MouseEvent, useEffect, useMemo, useState } from "react";
import { NavTab, NavTabs } from "..";
import { ExampleComponentProps, ExampleKnobsProps } from "../../../../../../utils/dev-example";

export const navTabsExampleKnobs: ExampleKnobsProps = {};

export const NavTabsExample: FC<ExampleComponentProps> = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const tabs = useMemo(
        () => [
            { href: "#/eksempler", children: "Eksempler" },
            { href: "#/bruk", children: "Bruk" },
            { href: "#/tekst", children: "Tekst" },
            { href: "#/spec", children: "Design spec" },
            { href: "#/kode", children: "Kode" },
        ],
        [],
    );

    useEffect(() => {
        if (typeof window === "undefined") {
            return;
        }
        const selectedIndex = tabs.findIndex((tab) => tab.href === window.location.hash);

        setSelectedIndex(selectedIndex !== -1 ? selectedIndex : 0);
    }, [tabs]);

    return (
        <NavTabs>
            {tabs.map((tab, index) => (
                <NavTab
                    key={index}
                    {...tab}
                    aria-selected={selectedIndex === index}
                    onClick={(e: MouseEvent) => {
                        setSelectedIndex(index);
                    }}
                />
            ))}
        </NavTabs>
    );
};
