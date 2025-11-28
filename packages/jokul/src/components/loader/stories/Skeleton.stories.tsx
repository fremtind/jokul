import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import "../styles/_index.scss";
import { SkeletonAnimation } from "../skeletons/SkeletonAnimation.js";
import { SkeletonButton } from "../skeletons/SkeletonButton.js";
import { SkeletonCheckboxGroup } from "../skeletons/SkeletonCheckboxGroup.js";
import { SkeletonElement } from "../skeletons/SkeletonElement.js";
import { SkeletonInput } from "../skeletons/SkeletonInput.js";
import { SkeletonRadioButtonGroup } from "../skeletons/SkeletonRadioButtonGroup.js";
import {
    SkeletonTable,
    SkeletonTableHeader,
    SkeletonTableRow,
} from "../skeletons/SkeletonTable.js";
import { SkeletonTextArea } from "../skeletons/SkeletonTextArea.js";

const meta = {
    title: "Komponenter/Loader/SkeletonTable",
    component: SkeletonTable,
    subcomponents: { SkeletonElement, SkeletonTableHeader },
    argTypes: {
        width: {
            control: "number",
        },
    },
} satisfies Meta<typeof SkeletonTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SkeletonStory: Story = {
    name: "Skeleton",
    args: {
        children: (
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
                                <SkeletonElement
                                    width={index % 2 ? 115 : 185}
                                    height={19}
                                />
                            </div>
                            <div style={{ width: 115 }}>
                                <SkeletonElement
                                    width={24}
                                    height={24}
                                    shape="circle"
                                />
                            </div>
                        </SkeletonTableRow>
                    ))}
                </SkeletonTable>
            </div>
        ),
    },
    render: (args) => (
        // biome-ignore lint/a11y/useValidAriaRole: // Kun for eksempelet, ellers blir det mange alerts på siden
        <SkeletonAnimation {...args} role="none presentation" />
    ),
};
