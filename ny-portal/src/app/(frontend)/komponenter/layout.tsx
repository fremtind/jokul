import { Flex } from "@fremtind/jokul/components/flex";
import styles from "./komponenter.module.scss";
import { NavigationMenu } from "./navigation/NavigationMenu";
import { NavigationMenuButton } from "./navigation/NavigationMenuButton";

interface Props {
    children: React.ReactNode;
}

export default function PortalLayout({ children }: Props) {
    return (
        <Flex gap={64}>
            <NavigationMenu />
            <div className={styles.componentPage}>{children}</div>
        </Flex>
    );
}
