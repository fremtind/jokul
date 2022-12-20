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

    useEffect(() => {
        if (tabContainer.current && activeTab.current && tabIndicator.current) {
            if (previousIndex === undefined) {
                // Ikke animer inn indikatoren ved første render
                tabIndicator.current.style.setProperty("transition", "none");
            }

            setContainerRect(tabContainer.current.getBoundingClientRect());
            setActiveTabRect(activeTab.current.getBoundingClientRect());

            setTimeout(() => {
                tabIndicator.current?.style.removeProperty("transition");
            }, 10);
        }
    }, [activeIndex, previousIndex, density]);

    return { tabContainer, activeTab, tabIndicator, setActiveTabRect, indicatorPosition, indicatorWidth };
};
