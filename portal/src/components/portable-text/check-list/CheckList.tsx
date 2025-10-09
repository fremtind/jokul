"use client";
import type { Jokul_checkList } from "@/sanity/types";
import { CheckListItem, CrossListItem, List } from "@fremtind/jokul/list";
import type { FC } from "react";

import styles from "./checkList.module.scss";

export const CheckList: FC<{ value: Jokul_checkList }> = ({ value }) => {
    if (!value?.items?.length) return null;

    return (
        <div className={styles.list_wrapper}>
            <List className="jkl-body">
                {value.items.map((item) =>
                    item.type === "check" ? (
                        <CheckListItem
                            key={item._key}
                            className={styles.list_item}
                        >
                            {item.text}
                        </CheckListItem>
                    ) : (
                        <CrossListItem
                            key={item._key}
                            className={styles.list_item}
                        >
                            {item.text}
                        </CrossListItem>
                    ),
                )}
            </List>
        </div>
    );
};
