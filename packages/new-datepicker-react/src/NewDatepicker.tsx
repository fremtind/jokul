import React, { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const NewDatepicker = (props: Props) => {
    return <div>{props.children}</div>;
};
