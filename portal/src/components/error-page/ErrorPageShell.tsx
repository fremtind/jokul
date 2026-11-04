import { ErrorPage, type ErrorPageProps } from "./ErrorPage";
import styles from "./error-page.module.scss";

/**
 * Feilside med eget `html`/`body`, for feil som oppstår før eller i portalens
 * rot-layout. Den er med vilje uavhengig av Header, Footer og Sanity, slik at
 * den også virker når det er nettopp de som feiler.
 */
export const ErrorPageShell = (props: ErrorPageProps) => (
    <html lang="no" className="jkl">
        <body>
            <main className={styles.shell}>
                <ErrorPage {...props} />
            </main>
        </body>
    </html>
);
