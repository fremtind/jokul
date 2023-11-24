import cn from "classnames";
import React, { SVGAttributes } from "react";
import { IconProps, IconVariant } from "./icons/types";

export type IconSet = Record<IconVariant, React.FC<SVGAttributes<SVGElement>>>;
export type IconVariants = Record<"bold" | "regular", IconSet>;

export const makeIconComponent = (variants: IconVariants) => {
    const Icon: React.FC<IconProps> = ({
        as = "div",
        bold = false,
        className,
        variant = "inherit",
        "data-testid": testId,
        style,
        ...rest
    }) => {
        const IconComponent = variants["regular"]["inherit"];
        const BoldIconComponent = variants["bold"]["inherit"];
        const MediumIconComponent = variants["regular"]["medium"];
        const MediumBoldIconComponent = variants["bold"]["medium"];
        const SmallIconComponent = variants["regular"]["small"];
        const SmallBoldIconComponent = variants["bold"]["small"];

        const Tag = as;
        return (
            <Tag
                className={cn(className, "jkl-icon", `jkl-icon--${variant}`, { "jkl-icon--bold": bold })}
                aria-hidden="true"
                style={style}
                data-testid={testId}
            >
                <IconComponent className="jkl-icon__icon jkl-icon__icon--inherit jkl-icon__icon--regular" {...rest} />
                <BoldIconComponent className="jkl-icon__icon jkl-icon__icon--inherit jkl-icon__icon--bold" {...rest} />
                <MediumIconComponent
                    className="jkl-icon__icon jkl-icon__icon--medium jkl-icon__icon--regular"
                    {...rest}
                />
                <MediumBoldIconComponent
                    className="jkl-icon__icon jkl-icon__icon--medium jkl-icon__icon--bold"
                    {...rest}
                />
                <SmallIconComponent
                    className="jkl-icon__icon jkl-icon__icon--small jkl-icon__icon--regular"
                    {...rest}
                />
                <SmallBoldIconComponent
                    className="jkl-icon__icon jkl-icon__icon--small jkl-icon__icon--bold"
                    {...rest}
                />
            </Tag>
        );
    };

    return Icon;
};
