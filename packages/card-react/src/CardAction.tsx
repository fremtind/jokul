import { MouseEventHandler } from "react";

export type validButtons = "primary" | "secondary" | "tertiary";

export type Action = {
    type?: validButtons;
    name?: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
};
