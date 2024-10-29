import { type WithChildren } from "@fremtind/jkl-core";
import { ErrorTag, SuccessTag } from "@fremtind/jkl-tag-react";
import cn from "classnames";
import React, { type FC } from "react";

interface DoDontPairProps extends WithChildren {
    className?: string;
}

export const DoDontPair: FC<DoDontPairProps> = ({ children, className }) => {
    if (!children) {
        return null;
    }

    return <div className={cn("jkl-portal-do-dont-pair", className)}>{children}</div>;
};

export type ExampleType = "do" | "dont" | "avoid";
export interface DoDontExampleProps extends WithChildren {
    type: ExampleType;
    description?: string | null;
}

export const DoDontExample: FC<DoDontExampleProps> = ({ children, description, type }) => {
    const tag = type === "do" ? <SuccessTag>Riktig</SuccessTag> : <ErrorTag>Feil</ErrorTag>;

    return (
        <div className="jkl-portal-do-dont-example">
            <div className="jkl-portal-do-dont-example__example">{children}</div>
            <div className="jkl-portal-do-dont-example__description">
                {tag}
                <p>{description}</p>
            </div>
        </div>
    );
};

export const DoExample: FC<Omit<DoDontExampleProps, "type">> = (props) => <DoDontExample type="do" {...props} />;

export const DontExample: FC<Omit<DoDontExampleProps, "type">> = (props) => <DoDontExample type="dont" {...props} />;
