import { WithChildren } from "@fremtind/jkl-core";
import cx from "classnames";
import React from "react";
import { ColorInfo, Color } from "./";
import "./primary-color.scss";

interface PrimaryColorProps extends Color, WithChildren {
    className?: string;
    title: string;
}

export const PrimaryColor: React.FC<PrimaryColorProps> = ({ title, className, children, ...colorInfo }) => (
    <article className="jkl-portal-primary-color">
        <h3 className="jkl-portal-primary-color__title jkl-sub-heading-large">{title}</h3>
        <ColorInfo className={cx("jkl-portal-primary-color__swatch", className)} {...colorInfo} />
        <p className="jkl-portal-primary-color__text jkl-body jkl-portal-paragraph">{children}</p>
    </article>
);
