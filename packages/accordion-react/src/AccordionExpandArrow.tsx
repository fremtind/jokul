import cn from "classnames";
import React, { FC } from "react";

interface Props {
    className?: string;
    expanded?: boolean;
}

export const AccordionExpandArrow: FC<Props> = ({ expanded = false, className }) => {
    return (
        <span
            className={cn("jkl-accordion-item__arrow", className, {
                "jkl-accordion-item__arrow--expanded": expanded,
            })}
        >
            <svg
                className="jkl-accordion-item__arrow-up"
                viewBox="0 0 12 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M11.15 8.51998L10.35 7.73998L6.54999 11.58L6.55 0.699982L5.43 0.699982L5.43 11.56L1.67 7.73998L0.869995 8.51998L6.01 13.54L11.15 8.51998Z"
                    fill="currentColor"
                />
            </svg>
            <svg
                className="jkl-accordion-item__arrow-down"
                viewBox="0 0 12 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0.940002 5.71998L1.74 6.49998L5.54 2.65998V13.54H6.66V2.67998L10.42 6.49998L11.22 5.71998L6.08 0.699982L0.940002 5.71998Z"
                    fill="currentColor"
                />
            </svg>
        </span>
    );
};
