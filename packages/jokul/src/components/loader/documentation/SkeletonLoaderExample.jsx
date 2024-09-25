import React, { FC } from "react";
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
} from "..";

export const knobs = [];

export const SkeletonLoaderExample = () => {
    /* -- EXAMPLE CODE START -- */
    return (
        <SkeletonAnimation role="none presentation">
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
    /* -- EXAMPLE CODE END -- */
};
