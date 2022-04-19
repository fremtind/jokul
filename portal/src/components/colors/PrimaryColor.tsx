import React, { ReactNode } from "react";
import cx from "classnames";
import { ColorInfo, Color } from "./";
import "./primary-color.scss";

interface PrimaryColorProps extends Color {
    className?: string;
    children?: ReactNode;
    title: string;
}

export const PrimaryColor: React.FC<PrimaryColorProps> = ({ title, className, children, ...colorInfo }) => (
    <article className="jkl-portal-primary-color">
        <h3 className="jkl-portal-primary-color__title jkl-sub-heading-large">{title}</h3>
        <ColorInfo className={cx("jkl-portal-primary-color__swatch", className)} {...colorInfo} />
        <p className="jkl-portal-primary-color__text jkl-body jkl-portal-paragraph">{children}</p>
    </article>
);
