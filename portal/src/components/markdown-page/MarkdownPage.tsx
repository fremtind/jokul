import type { ReactNode } from "react";
import styles from "./markdown-page.module.scss";

interface MarkdownPageProps {
    children: ReactNode;
}

/** Gir typografi til markdown-filer fra repoet som vises som egne sider. */
export const MarkdownPage = ({ children }: MarkdownPageProps) => (
    <article className={styles.markdownPage}>{children}</article>
);
