import { Navigation } from "@/components/Navigation";
import { TabListener } from "@/components/TabListener";
import Link from "next/link";
import "./global.scss";
import styles from "./layout.module.scss";

interface Props {
    children: React.ReactNode;
}

export default function PortalLayout({ children }: Props) {
    return (
        <html lang="no">
            <body className="jkl">
                <TabListener />
                <Link
                    id="content-skip-link"
                    className="jkl-body jkl-sr-only jkl-sr-only--focusable jkl-portal-skip-link"
                    href="#innhold"
                >
                    Hopp til innhold
                </Link>
                <div className={styles.layout}>
                    <Navigation />
                    <main
                        className={styles.layout__content}
                        style={
                            {
                                "--scrollbar-width": `${
                                    /* scrollbarWidth */ 6
                                }px`,
                            } as React.CSSProperties
                        }
                    >
                        {children}
                    </main>
                    <div className={styles.layout__footer}>
                        {/* <Footer
                heading="Jøkul er designsystemet til Fremtind Forsikring"
                links={[
                  {
                    external: false,
                    component: Cookies,
                    title: 'Bruk av informasjonskapsler',
                  },
                  {
                    external: true,
                    href: 'https://www.fremtind.no/personvern/',
                    title: 'Personvernserklæring',
                  },
                  {
                    external: true,
                    href: 'https://github.com/fremtind/jokul',
                    title: 'Jøkul på GitHub',
                  },
                  {
                    external: true,
                    href: 'https://fremtind.no/karriere/',
                    title: 'Jobb i Fremtind',
                  },
                ]}
              /> */}
                    </div>
                </div>
            </body>
        </html>
    );
}
