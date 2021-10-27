import React, { ReactNode, useLayoutEffect, useRef, useState, FC, useCallback, useEffect } from "react";

/**
 * Konteiner for innhold i et tabbet brukergrensesnitt. Ikke funksjonell utenfor et Tabs element.
 *
 * Docs: https://jokul.fremtind.no/komponenter/tabs
 */
export const TabPanel: FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = ({
    children,
    ...props
}) => {
    return (
        <div role="tabpanel" {...props}>
            {children}
        </div>
    );
};

interface TabProps {
    children: string;
}

/**
 * En Tab til bruk som element i TabList. Ikke funksjonell utenfor et TabList element.
 *
 * Docs: https://jokul.fremtind.no/komponenter/tabs
 */
// eslint-disable-next-line react/display-name
export const Tab = React.forwardRef<HTMLButtonElement, TabProps>((props, ref) => (
    <button className="jkl-tab" role="tab" type="button" ref={ref} {...props} />
));

interface TabListProps {
    children: ReactNode;
    "aria-label": string;
}

interface TabListInjectedProps {
    index: number;
    setIndex: React.Dispatch<React.SetStateAction<number>>;
    tabIDs: string[];
    tabPanelIDs: string[];
}

/**
 * Konteiner for elementer av typen Tab. Ikke funksjonell utenfor et Tabs element.
 *
 * Docs: https://jokul.fremtind.no/komponenter/tabs
 */
export const TabList = ({ children, ...injected }: TabListProps) => {
    // props injected by Tabs
    const { index, setIndex, tabIDs, tabPanelIDs, ...props } = injected as TabListProps & TabListInjectedProps;

    const [tabsRect, setTabsRect] = useState<DOMRect>();
    const [activeRect, setActiveRect] = useState<DOMRect>();

    const tabsRef = useRef<HTMLDivElement>(null);
    const activeRef = useRef<HTMLButtonElement>(null);

    useLayoutEffect(() => {
        setTabsRect(tabsRef.current?.getBoundingClientRect());
        setActiveRect(activeRef.current?.getBoundingClientRect());
    }, [index]);

    const keyDownHandler = useCallback((event: React.KeyboardEvent<HTMLButtonElement>) => {
        if (event.key === "ArrowLeft") {
            const current = event.currentTarget;
            const prev = event.currentTarget.previousSibling;

            if (prev) {
                (prev as HTMLElement).focus();
            } else {
                (current.parentElement?.lastChild?.previousSibling as HTMLElement).focus();
            }
        }

        if (event.key === "ArrowRight") {
            const current = event.currentTarget;
            const next = event.currentTarget.nextSibling;

            // skip the focus indicator element
            if (next && next.nodeName === "BUTTON") {
                (next as HTMLElement).focus();
            } else {
                (current.parentElement?.firstChild as HTMLElement).focus();
            }
        }
    }, []);

    return (
        <div role="tablist" className="jkl-tablist" ref={tabsRef} {...props}>
            {React.Children.map(children, (tab, tabIndex) => {
                const isActive = index === tabIndex;

                return React.isValidElement(tab)
                    ? React.cloneElement(tab, {
                          onKeyDown: keyDownHandler,
                          tabIndex: isActive ? undefined : -1,
                          ref: isActive ? activeRef : undefined,
                          onClick: () => setIndex(tabIndex),
                          "aria-selected": isActive,
                          "aria-controls": tabPanelIDs[tabIndex],
                          id: tabIDs[tabIndex],
                      })
                    : null;
            })}

            <span
                className="jkl-tab__indicator"
                style={{
                    left: (activeRect?.left || 0) - (tabsRect?.left || 0),
                    bottom: -1,
                    width: activeRect?.width,
                }}
            />
        </div>
    );
};

interface Props {
    children: ReactNode;
}

/**
 * Konteiner for et grensesnitt hvor man kan tabbe mellom innhold.
 * Må inneholde en TabList etterfulgt av en eller flere TabPanel.
 *
 * Docs: https://jokul.fremtind.no/komponenter/tabs
 */
export const Tabs = (props: Props) => {
    const [index, setIndex] = useState(0);

    const [tabIDs, setTabIDs] = useState<string[]>([]);
    const [tabPanelIDs, setTabPanelIds] = useState<string[]>([]);

    const resolveIDs = useCallback(() => {
        const tabList = React.Children.toArray(props.children)[0];

        if (!React.isValidElement<TabListProps & TabListInjectedProps>(tabList)) return;

        React.Children.forEach(tabList.props.children, (tab) => {
            if (!React.isValidElement(tab)) return;

            setTabIDs((prev) => [...prev, Math.random().toString(36).substr(2, 8)]);
            setTabPanelIds((prev) => [...prev, Math.random().toString(36).substr(2, 8)]);
        });
    }, [props.children]);

    const renderTabList = () => {
        const tabList = React.Children.toArray(props.children)[0];

        if (!React.isValidElement<TabListProps & TabListInjectedProps>(tabList)) return;

        return React.cloneElement(tabList, {
            index,
            setIndex,
            tabIDs,
            tabPanelIDs,
        });
    };

    const renderTabPanels = () => {
        return React.Children.map(props.children, (child, childIndex) => {
            if (!React.isValidElement(child) || childIndex === 0) return;

            const tabPanelIndex = childIndex - 1;

            return tabPanelIndex === index
                ? React.cloneElement(child, {
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
        <div {...props}>
            {renderTabList()}
            {renderTabPanels()}
        </div>
    );
};
