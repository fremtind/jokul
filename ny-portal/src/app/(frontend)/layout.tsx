import { Flex } from "@fremtind/jokul/components/flex";
import { TabListener } from "@/components/TabListener";
import Link from "next/link";
import "./global.scss";
import styles from "./layout.module.scss";

interface Props {
    children: React.ReactNode;
}

export default function PortalLayout({ children }: Props) {
    return (
        <html lang="no" className="jkl">
            <body className={styles.page}>
                <TabListener />
                <Link
                    id="content-skip-link"
                    className="jkl-body jkl-sr-only jkl-sr-only--focusable jkl-portal-skip-link"
                    href="#innhold"
                >
                    Hopp til innhold
                </Link>
                <div className={styles.content}>
                    <Flex
                        gap={32}
                        justifyContent="space-between"
                        className={styles.header}
                    >
                        <p className={styles.logo}>Jøkul</p>
                    </Flex>
                    <main>{children}</main>
                </div>
            </body>
        </html>
    );
}
