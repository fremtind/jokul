import { NavLink } from "@fremtind/jokul/nav-link";
import styles from "./article.module.scss";

export type HeaderProps = {
    title: string;
    description?: string;
    date?: {
        published?: Date;
        updated?: Date;
    };
    backLink?: {
        href: string;
        label: string;
    };
};

export const ArticleHeader = async (props: HeaderProps) => {
    const { title, description, date, backLink } = props;

    return (
        <header className={styles.header}>
            {backLink && (
                <NavLink className={styles.backLink} href={backLink.href} back>
                    {backLink.label}
                </NavLink>
            )}
            <h1 className={styles.title}>{title}</h1>
            {description && <p className={styles.description}>{description}</p>}
            {date?.published && (
                <p className={styles.date}>
                    Publisert{" "}
                    <time dateTime={new Date(date.published).toDateString()}>
                        {new Date(date.published).toLocaleString(
                            navigator.language,
                            {
                                day: "2-digit",
                                month: "2-digit",
                                year: "numeric",
                            },
                        )}
                    </time>
                </p>
            )}
            {date?.updated && (
                <p className={styles.date}>
                    Oppdatert{" "}
                    <time dateTime={new Date(date.updated).toDateString()}>
                        {new Date(date.updated).toLocaleString(
                            navigator.language,
                            {
                                day: "2-digit",
                                month: "2-digit",
                                year: "numeric",
                            },
                        )}
                    </time>
                </p>
            )}
        </header>
    );
};
