import React, { ReactNode } from "react";
import "./styles.scss";

interface CodeProps {
    children: ReactNode;
}

const Code = ({ children }: CodeProps) => <span className="portal__code">{children}</span>;

export default Code;
