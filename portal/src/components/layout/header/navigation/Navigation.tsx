"use client";

import {
    HamburgerMenu,
    NavigationList,
} from "@/components/layout/header/navigation/menu";
import { Flex } from "@fremtind/jokul/flex";
import styles from "./navigation.module.scss";

export const Navigation = () => {
    return (
        <Flex alignItems="center" gap="s" className={styles.navigation}>
            <NavigationList />
            <HamburgerMenu />
        </Flex>
    );
};
