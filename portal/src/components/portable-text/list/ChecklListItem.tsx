import { CheckListItem as JokulListItem } from "@fremtind/jokul/list";
import type { PortableTextComponentProps } from "@portabletext/react";
import type { FC } from "react";

import styles from "./list.module.scss";

export const CheckListItem: FC<PortableTextComponentProps<any>> = ({
    children,
}) => {
    return (
        <JokulListItem className={styles.checkCrossListItem}>
            {children}
        </JokulListItem>
    );
};
