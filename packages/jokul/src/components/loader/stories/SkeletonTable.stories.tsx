import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { SkeletonAnimation } from "../skeletons/SkeletonAnimation.js";
import { SkeletonElement } from "../skeletons/SkeletonElement.js";
import {
    SkeletonTable as Component,
    SkeletonTableHeader,
    SkeletonTableRow,
} from "../skeletons/SkeletonTable.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Loader/SkeletonTable",
    component: Component,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    decorators: (Story) => (
        <SkeletonAnimation>
            <Story />
        </SkeletonAnimation>
    ),
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SkeletonTable: Story = {
    args: {
        children: [
            <SkeletonTableHeader key={1}>
                <div style={{ width: 215 }}>
                    <SkeletonElement width={115} height={16} />
                </div>
                <div style={{ width: 115 }}>
                    <SkeletonElement width={115} height={16} />
                </div>
            </SkeletonTableHeader>,
            Array.from(Array(5)).map((_, index) => (
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
            )),
        ],
    },
};
