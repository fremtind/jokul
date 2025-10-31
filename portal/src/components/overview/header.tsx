import { PreferencesMenu } from "@/components/preferences-menu/PreferencesMenu";
import { Flex } from "@fremtind/jokul/flex";
import type { ReactNode } from "react";

import styles from "./overview.module.scss";

type ComponentGridProps = {
    title: string;
    children?: ReactNode;
};

export function OverviewHeader(props: ComponentGridProps) {
    const { title, children } = props;

    return (
        <Flex as="header" direction="column" gap="xl" className={styles.header}>
            <h1>{title}</h1>
            <search className={styles.toolbar}>
                {children && <div className={styles.filters}>{children}</div>}
                <div className={styles.views}>
                    <PreferencesMenu />
                </div>
            </search>
        </Flex>
    );
}
