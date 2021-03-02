import React, { forwardRef } from "react";
import { Props } from "./types";

export const BaseButton = forwardRef<HTMLButtonElement, Props>((props, ref) => <button {...props} ref={ref} />);

BaseButton.displayName = "BaseButton";
