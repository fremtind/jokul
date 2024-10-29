import { type WithChildren } from "@fremtind/jkl-core";
import React, { type FC } from "react";

interface AnatomyExampleProps extends WithChildren {
    stepDescriptions: Array<{ title: string; description: string }>;
}

export const AnatomyExample: FC<AnatomyExampleProps> = ({
    children,
    stepDescriptions,
}) => {
    return (
        <section className="jkl-portal-anatomy-example">
            <div className="jkl-portal-anatomy-example__example">
                {children}
            </div>
            <h3 className="jkl-portal-anatomy-example__title">Anatomi</h3>
            <div className="jkl-portal-anatomy-example__description">
                {stepDescriptions.map((step) => (
                    <div key={step.title}>
                        <p>
                            <strong>{step.title}</strong>
                        </p>
                        <p>{step.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
