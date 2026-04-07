import React, { type FC } from "react";
import type {
    ExampleComponentProps,
    ExampleKnobsProps,
} from "utils/dev-example/index.js";
import { ExpandablePanel } from "../ExpandablePanel.js";

export const knobs: ExampleKnobsProps = {};

export const SingleStrokeExample: FC<ExampleComponentProps> = () => {
    return (
        <div
            data-testid="single-stroke-example"
            style={{
                width: "min(100%, 32rem)",
                display: "grid",
                gap: 16,
            }}
        >
            <p style={{ margin: 0 }}>
                Et standalone panel skal beholde ytre border radius selv om det
                ikke har andre stroke-paneler over eller under seg.
            </p>
            <ExpandablePanel variant="stroke" data-testid="single-stroke-panel">
                <ExpandablePanel.Header data-testid="single-stroke-trigger">
                    Se dekning for leiebil
                </ExpandablePanel.Header>
                <ExpandablePanel.Content data-testid="single-stroke-content">
                    Forsikringen dekker skade, tyveri og egenandel når bilen er
                    leid i Norden eller EU og leieforholdet er betalt med
                    kortet.
                </ExpandablePanel.Content>
            </ExpandablePanel>
            <p style={{ margin: 0 }}>Panelgruppen fortsetter ikke under her.</p>
        </div>
    );
};
