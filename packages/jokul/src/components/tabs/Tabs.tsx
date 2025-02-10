import clsx from "clsx";
import { nanoid } from "nanoid";
import React, { useCallback, useEffect, useState } from "react";
import { usePreviousValue } from "../../hooks/usePreviousValue/usePreviousValue.js";
import { InjectedProps } from "./TabList.js";
import { TabsContextProvider } from "./tabsContext.js";
import { TabListProps, TabPanelProps, TabsProps } from "./types.js";

/**
 * Konteiner for et grensesnitt hvor man kan tabbe mellom innhold.
 * Må inneholde en TabList etterfulgt av en eller flere TabPanel.
 *
 * Docs: https://jokul.fremtind.no/komponenter/tabs
 */
export const Tabs = ({
    onChange,
    defaultTab,
    density,
    ...props
}: TabsProps) => {
    const [activeIndex, setActiveIndex] = useState(defaultTab ?? 0);

    const previousTabIndex = usePreviousValue(activeIndex);

    useEffect(() => {
        if (
            previousTabIndex !== undefined &&
            previousTabIndex !== activeIndex &&
            onChange
        ) {
            onChange(activeIndex);
        }
    }, [onChange, previousTabIndex, activeIndex]);

    const [tabIDs, setTabIDs] = useState<string[]>([]);
    const [tabPanelIDs, setTabPanelIds] = useState<string[]>([]);

    const resolveIDs = useCallback(() => {
        const tabList = React.Children.toArray(props.children)[0];

        if (!React.isValidElement(tabList)) return;

        React.Children.forEach(tabList.props.children, (tab) => {
            if (!React.isValidElement(tab)) return;

            setTabIDs((prev) => [...prev, `jkl-tab-${nanoid(8)}`]);
            setTabPanelIds((prev) => [...prev, `jkl-tabpanel-${nanoid(8)}`]);
        });
    }, [props.children]);

    const renderTabList = () => {
        const tabList = React.Children.toArray(props.children)[0];

        if (!React.isValidElement<TabListProps & InjectedProps>(tabList))
            return;

        return React.cloneElement<TabListProps & InjectedProps>(tabList, {
            activeIndex,
            setActiveIndex,
            tabIDs,
            tabPanelIDs,
        });
    };

    const renderTabPanels = () => {
        return React.Children.map(props.children, (child, childIndex) => {
            if (
                !React.isValidElement<
                    TabPanelProps & React.HTMLAttributes<HTMLDivElement>
                >(child) ||
                childIndex === 0
            )
                return;

            const tabPanelIndex = childIndex - 1;

            return tabPanelIndex === activeIndex
                ? React.cloneElement<
                      TabPanelProps & React.HTMLAttributes<HTMLDivElement>
                  >(child, {
                      "aria-labelledby": tabIDs[tabPanelIndex],
                      id: tabPanelIDs[tabPanelIndex],
                  })
                : null;
        });
    };

    useEffect(() => {
        resolveIDs();
    }, [resolveIDs]);

    return (
        <TabsContextProvider state={{ density }}>
            <div
                {...props}
                className={clsx("jkl-tabs", props.className)}
                data-density={density}
            >
                {renderTabList()}
                {renderTabPanels()}
            </div>
        </TabsContextProvider>
    );
};
