import cn from "classnames";
import React, { FC } from "react";

interface Props {
    expanded?: boolean;
}

export const ExpandArrow: FC<Props> = ({ expanded = false }) => {
    return (
        <span
            className={cn("jkl-select__arrow", {
                "jkl-select__arrow--expanded": expanded,
            })}
        >
            <svg className="jkl-select__arrow-down" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M6.90762 13.8828L11.9272 8.86326L12.7093 9.64537L6.35463 16L-1.68645e-06 9.64536L0.782101 8.86326L5.80156 13.8827L5.80156 1.01438e-06L6.90762 1.20777e-06L6.90762 13.8828Z"
                    fill="currentColor"
                />
            </svg>
            <svg className="jkl-select__arrow-up" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M5.80163 2.1172L0.78209 7.13674L-1.29938e-05 6.35464L6.35462 5.14415e-08L12.7093 6.35464L11.9272 7.13674L6.90769 2.11728L6.9077 16L5.80163 16L5.80163 2.1172Z"
                    fill="currentColor"
                />
            </svg>
        </span>
    );
};
