import { CrossListItem as JokulListItem } from "@fremtind/jokul/list";
import type { PortableTextComponentProps } from "@portabletext/react";
import type { FC } from "react";

import styles from "./list.module.scss";

export const CrossListItem: FC<PortableTextComponentProps<any>> = ({
    children,
}) => {
    return (
        <JokulListItem className={styles.checkCrossListItem}>
            {children}
        </JokulListItem>
    );
};
