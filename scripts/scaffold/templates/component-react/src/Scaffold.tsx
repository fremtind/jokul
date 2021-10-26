import React, { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export const Scaffold = (props: Props) => {
    return <div>{props.children}</div>;
};
