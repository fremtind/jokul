import React, { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const Scaffold = (props: Props) => {
    return <div>{props.children}</div>;
};
