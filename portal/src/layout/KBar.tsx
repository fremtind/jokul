import { KBarPortal, KBarPositioner, KBarAnimator, KBarSearch, useMatches, KBarResults } from "kbar";
import React, { type FC } from "react";

const RenderResults: FC = () => {
    const { results } = useMatches();
    return (
        <KBarResults
            items={results}
            onRender={({ item, active }) => {
                if (typeof item === "string") {
                    return <div>{item}</div>;
                }

                return (
                    <div style={{ background: active ? "var(--jkl-background-color)" : "transparent" }}>
                        {item.name}
                    </div>
                );
            }}
        />
    );
};

export const KBar: FC = () => {
    return (
        <KBarPortal>
            <KBarPositioner>
                <KBarAnimator>
                    <KBarSearch />
                    <RenderResults />
                </KBarAnimator>
            </KBarPositioner>
        </KBarPortal>
    );
};
