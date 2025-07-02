import { Flex } from "@fremtind/jokul/flex";
import { Link } from "@fremtind/jokul/link";
import BetaTag from "../BetaTag";
import styles from "./SiteHeader.module.scss";
import { HamburgerButton } from "./menu/HamburgerButton";
import { MenuItemList } from "./menu/MenuItemList";

export const SiteHeader = async () => {
    const menuId = "global-menu";

    return (
        <Flex
            as="header"
            gap={32}
            alignItems="center"
            direction="column"
            className={styles.globalHeader}
        >
            <Flex
                gap={24}
                justifyContent="space-between"
                className={styles.banner}
            >
                <Flex as="p" gap={8} alignItems="center">
                    <Link href="/" className={styles.logo}>
                        Jøkul
                    </Link>
                    <BetaTag />
                </Flex>
                <HamburgerButton menuId={menuId} />
            </Flex>

            <nav aria-label="Hovednavigasjon" className={styles.menu}>
                <MenuItemList />
            </nav>
        </Flex>
    );
};
