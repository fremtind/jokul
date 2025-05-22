import { Flex } from "@fremtind/jokul/components/flex";
import { Link } from "@fremtind/jokul/components/link";
import { HamburgerButton } from "./menu/HamburgerButton";
import { MenuItemList } from "./menu/MenuItemList";
import styles from "./SiteHeader.module.scss";

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
                <p>
                    <Link href="/" className={styles.logo}>
                        Jøkul
                    </Link>
                </p>
                <HamburgerButton menuId={menuId} />
            </Flex>

            <nav
                role="navigation"
                aria-label="Hovednavigasjon"
                className={styles.menu}
            >
                <MenuItemList />
            </nav>
        </Flex>
    );
};
