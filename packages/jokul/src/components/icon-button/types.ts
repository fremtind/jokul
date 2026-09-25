import type { ButtonHTMLAttributes } from "react";
import type { WithTracking } from "../cookie-consent/types.js";

export interface IconButtonProps
    extends Exclude<ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
        WithTracking {}
