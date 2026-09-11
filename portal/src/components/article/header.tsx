import { getRelativeTime } from "@/utils/relativeTime";
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
                    <time
                        dateTime={new Date(date.published).toISOString()}
                        title={new Date(date.published).toLocaleString(
                            "no-NB",
                            {
                                day: "2-digit",
                                month: "2-digit",
                                year: "numeric",
                            },
                        )}
                    >
                        {getRelativeTime(date.published)}
                    </time>
                </p>
            )}
            {date?.updated && (
                <p className={styles.date}>
                    Oppdatert{" "}
                    <time
                        dateTime={new Date(date.updated).toISOString()}
                        title={new Date(date.updated).toLocaleString("no-NB", {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                        })}
                    >
                        {getRelativeTime(date.updated)}
                    </time>
                </p>
            )}
        </header>
    );
};
