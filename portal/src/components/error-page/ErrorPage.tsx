"use client";

import { Button } from "@fremtind/jokul/button";
import { Flex } from "@fremtind/jokul/flex";
import { List, ListItem } from "@fremtind/jokul/list";
import { Text } from "@fremtind/jokul/typography";
import { Title } from "@fremtind/jokul/typography";
import styles from "./error-page.module.scss";
import {
    ERROR_PAGE_CONTENT,
    type ErrorAction,
    type ErrorStatusCode,
} from "./errors";

const ACTION_LABELS: Record<ErrorAction, string> = {
    home: "Til oversikten",
    back: "Gå tilbake",
    retry: "Prøv igjen",
    login: "Logg inn",
};

export interface ErrorPageProps {
    status: ErrorStatusCode;
    /**
     * Kalles av «Prøv igjen». Send inn `reset` fra en error boundary for å
     * prøve å rendre på nytt uten full sidelasting.
     */
    onRetry?: () => void;
    /**
     * Feil-ID fra Next.js. Den er en hash, så den er trygg å vise, og gjør det
     * mulig å finne igjen feilen i loggene uten å avsløre noe om årsaken.
     */
    digest?: string;
}

/**
 * Lenkene bruker vanlig `<a>` og knappene `window` framfor `useRouter`, slik at
 * feilsiden også virker når den rendres utenfor et fungerende router-tre
 * (se `app/global-error.tsx`).
 */
export const ErrorPage = ({ status, onRetry, digest }: ErrorPageProps) => {
    const { title, description, details, tone, actions } =
        ERROR_PAGE_CONTENT[status];

    const renderAction = (action: ErrorAction, isPrimary: boolean) => {
        const variant = isPrimary ? "primary" : "secondary";
        const label = ACTION_LABELS[action];

        switch (action) {
            case "home":
                return (
                    <Button
                        key={action}
                        as="a"
                        href="/komponenter"
                        variant={variant}
                    >
                        {label}
                    </Button>
                );
            case "login":
                return (
                    <Button
                        key={action}
                        as="a"
                        href="/studio"
                        variant={variant}
                    >
                        {label}
                    </Button>
                );
            case "back":
                return (
                    <Button
                        key={action}
                        variant={variant}
                        onClick={() => window.history.back()}
                    >
                        {label}
                    </Button>
                );
            case "retry":
                return (
                    <Button
                        key={action}
                        variant={variant}
                        onClick={() =>
                            onRetry ? onRetry() : window.location.reload()
                        }
                    >
                        {label}
                    </Button>
                );
        }
    };

    return (
        <Flex
            as="section"
            direction="column"
            gap="l"
            alignItems="start"
            className={styles.errorPage}
            data-tone={tone}
        >
            <div>
                <Flex direction="column" as="hgroup" gap="8">
                    <Text size="m">{status}</Text>
                    <Title as="h2">{title}</Title>
                </Flex>
                <p className={styles.description}>{description}</p>
                {details ? (
                    <List className={styles.details}>
                        {details.map((detail) => (
                            <ListItem key={detail}>{detail}</ListItem>
                        ))}
                    </List>
                ) : null}
            </div>

            <Flex gap="s" wrap="wrap">
                {actions.map((action, index) =>
                    renderAction(action, index === 0),
                )}
            </Flex>

            {digest ? <p className={styles.digest}>Feil-ID: {digest}</p> : null}
        </Flex>
    );
};
