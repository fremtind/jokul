import React, { FC } from "react";
import { CodeExample, ExampleComponentProps, ExampleKnobsProps } from "../../../doc-utils";
import {
    SkeletonAnimation,
    SkeletonButton,
    SkeletonCheckboxGroup,
    SkeletonElement,
    SkeletonInput,
    SkeletonRadioButtonGroup,
    SkeletonTable,
    SkeletonTableHeader,
    SkeletonTableRow,
    SkeletonTextArea,
} from "../src";

import "./styles.scss";

export const skeletonLoaderExampleKnobs: ExampleKnobsProps = {};

export const SkeletonLoaderExample: FC<ExampleComponentProps> = () => {
    return (
        <SkeletonAnimation
            role="none presentation" // Kun for eksempelet, ellers blir det mange alerts på siden
        >
            <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
                <SkeletonElement width={350} height={32} />
                <SkeletonInput />
                <SkeletonTextArea />
                <SkeletonCheckboxGroup checkboxes={3} />
                <SkeletonRadioButtonGroup radioButtons={3} />
                <SkeletonButton width={225} />
                <SkeletonTable>
                    <SkeletonTableHeader>
                        <div style={{ width: 215 }}>
                            <SkeletonElement width={115} height={16} />
                        </div>
                        <div style={{ width: 115 }}>
                            <SkeletonElement width={115} height={16} />
                        </div>
                    </SkeletonTableHeader>
                    {Array.from(Array(5)).map((_, index) => (
                        <SkeletonTableRow key={index}>
                            <div style={{ width: 215 }}>
                                <SkeletonElement width={index % 2 ? 115 : 185} height={19} />
                            </div>
                            <div style={{ width: 115 }}>
                                <SkeletonElement width={24} height={24} shape="circle" />
                            </div>
                        </SkeletonTableRow>
                    ))}
                </SkeletonTable>
            </div>
        </SkeletonAnimation>
    );
};

export const skeletonLoaderExampleCode: CodeExample = () => {
    return `<SkeletonAnimation
    role="none presentation" // Kun for eksempelet, ellers blir det mange alerts på siden
>
    <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
        <SkeletonElement width={350} height={32} />
        <SkeletonInput />
        <SkeletonTextArea />
        <SkeletonCheckboxGroup checkboxes={3} />
        <SkeletonRadioButtonGroup radioButtons={3} />
        <SkeletonButton width={225} />
        <SkeletonTable>
            <SkeletonTableHeader>
                <div style={{ width: 215 }}>
                    <SkeletonElement width={115} height={16} />
                </div>
                <div style={{ width: 115 }}>
                    <SkeletonElement width={115} height={16} />
                </div>
            </SkeletonTableHeader>
            {Array.from(Array(5)).map((_, index) => (
                <SkeletonTableRow key={index}>
                    <div style={{ width: 215 }}>
                        <SkeletonElement width={index % 2 ? 115 : 185} height={19} />
                    </div>
                    <div style={{ width: 115 }}>
                        <SkeletonElement width={24} height={24} shape="circle" />
                    </div>
                </SkeletonTableRow>
            ))}
        </SkeletonTable>
    </div>
</SkeletonAnimation>`;
};
