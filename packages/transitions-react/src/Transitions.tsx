import React, { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const Transitions = (props: Props) => {
    return <div>{props.children}</div>;
};
