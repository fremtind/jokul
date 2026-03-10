import { Navigation } from "@/components/layout/header/navigation/Navigation";
import { Flex } from "@fremtind/jokul/flex";
import { Link } from "@fremtind/jokul/link";
import { Logo } from "./Logo";

import styles from "../global-layout.module.scss";

export const Header = async () => {
    return (
        <Flex as="header" className={styles.header}>
            <Link href="/" className={styles.logo}>
                <Logo />
            </Link>
            <Navigation />
        </Flex>
    );
};
