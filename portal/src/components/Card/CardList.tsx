import React, { FC } from "react";
import classNames from "classnames";
import "./card-list.scss";

interface Props {
    vertical?: boolean;
}

export const CardList: FC<Props> = ({ children, vertical }) => {
    const componentClassNames = classNames("jkl-portal__card-list", {
        "jkl-portal__card-list--vertical": vertical,
    });

    return <div className={componentClassNames}>{children}</div>;
};
