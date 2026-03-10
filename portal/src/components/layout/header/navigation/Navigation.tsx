import {
    HamburgerMenu,
    NavigationList,
} from "@/components/layout/header/navigation/menu";
import { Flex } from "@fremtind/jokul/flex";
import { GlobalSearch } from "./search/GlobalSearch";

import styles from "./navigation.module.scss";

export const Navigation = () => {
    return (
        <Flex alignItems="center" gap="none" className={styles.navigation}>
            <NavigationList />
            <GlobalSearch />
            <HamburgerMenu />
        </Flex>
    );
};
