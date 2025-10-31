import { PreferencesMenu } from "@/components/preferences-menu/PreferencesMenu";
import { Flex } from "@fremtind/jokul/flex";
import type { ReactNode } from "react";

import styles from "./overview.module.scss";

type OverviewHeaderProps = {
    title: string;
    children?: ReactNode;
    showToolbar?: boolean;
};

export function OverviewHeader(props: OverviewHeaderProps) {
    const { title, children, showToolbar = false } = props;

    return (
        <Flex as="header" direction="column" gap="xl" className={styles.header}>
            <h1>{title}</h1>
            {showToolbar && (
                <search className={styles.toolbar}>
                    {children && (
                        <div className={styles.filters}>{children}</div>
                    )}
                    <div className={styles.views}>
                        <PreferencesMenu />
                    </div>
                </search>
            )}
        </Flex>
    );
}
