import { type Density } from "@fremtind/jkl-core";
import { usePreviousValue } from "@fremtind/jkl-react-hooks";
import { useEffect, useRef, useState } from "react";

export interface TabIndicatorOptions {
    activeIndex?: number;
    density?: Density;
}

export const useTabIndicator = ({ activeIndex = 0, density = "comfortable" }: TabIndicatorOptions) => {
    const [containerRect, setContainerRect] = useState<DOMRect>();
    const [activeTabRect, setActiveTabRect] = useState<DOMRect>();

    const previousIndex = usePreviousValue(activeIndex);

    const tabContainer = useRef<HTMLDivElement>(null);
    const activeTab = useRef<HTMLButtonElement>(null);
    const tabIndicator = useRef<HTMLSpanElement>(null);

    const indicatorWidth = activeTabRect?.width || 0;
    const indicatorPosition = `${(activeTabRect?.left || 0) - (containerRect?.left || 0)}px`;

    // Sørg for å ikke animere indikatoren ved første innlasting av fanene
    useEffect(() => {
        if (previousIndex === undefined) {
            requestAnimationFrame(() => {
                tabIndicator.current?.style.setProperty("transition-property", "none");
                setContainerRect(tabContainer.current?.getBoundingClientRect());
                setActiveTabRect(activeTab.current?.getBoundingClientRect());
            });

            requestAnimationFrame(() => {
                tabIndicator.current?.style.removeProperty("transition-property");
            });
        }
    }, [activeIndex, previousIndex, density]);

    useEffect(() => {
        if (tabContainer.current) {
            setContainerRect(tabContainer.current.getBoundingClientRect());
        }
        if (activeTab.current) {
            setActiveTabRect(activeTab.current.getBoundingClientRect());
        }
    }, [activeIndex, density]);

    return { tabContainer, activeTab, tabIndicator, setActiveTabRect, indicatorPosition, indicatorWidth };
};
