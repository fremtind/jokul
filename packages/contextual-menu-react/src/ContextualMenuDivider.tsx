import clsx from "clsx";
import React, { type HTMLAttributes, type FC } from "react";

export const ContextualMenuDivider: FC<HTMLAttributes<HTMLHRElement>> = (props) => {
    const { className, ...hrProps } = props;

    return <hr className={clsx("jkl-contextual-menu-divider", className)} {...hrProps} />;
};

//kan vi ikke bare lage en divider komponent som importeres inn istedenfor en dedikert hr komponent under forskjellige komponenter? :) -Maria
