"use client";

import { SearchTrigger } from "../SearchTrigger";
import styles from "./navigation.module.scss";

const onOpenSearch = () => {};

export const Search = () => {
    return (
        <form
            className={styles.navigation__search}
            onSubmit={(e) => e.preventDefault()}
        >
            <SearchTrigger variant="full" onClick={onOpenSearch} />
        </form>
    );
};
