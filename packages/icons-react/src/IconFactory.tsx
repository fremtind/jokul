import cn from "classnames";
import React, { SVGAttributes } from "react";
import { IconProps, IconVariant } from "./icons/types";

export type IconSet = Record<IconVariant, React.FC<SVGAttributes<SVGElement>>>;
export type IconVariants = Record<"bold" | "regular", IconSet>;

export const makeIconComponent = (variants: IconVariants) => {
    const Icon: React.FC<IconProps> = ({ bold = false, className, variant = "small", ...rest }) => {
        const IconComponent = variants[bold ? "bold" : "regular"][variant];

        return <IconComponent className={cn(className, "jkl-icon", `jkl-icon--${variant}`)} {...rest} />;
    };

    return Icon;
};
