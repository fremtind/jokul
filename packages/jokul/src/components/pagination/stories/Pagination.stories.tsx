import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { Pagination as PaginationComponent } from "../Pagination.js";
import "../styles/_index.scss";

const meta: Meta = {
    title: "Komponenter/Pagination",
    component: PaginationComponent,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof PaginationComponent>;

export default meta;

type Story = StoryObj<typeof PaginationComponent>;

export const Pagination: Story = {
    args: {
        currentPage: 1,
        numberOfPages: 10,
        onPageChange: () => {},
    },
    decorators: [
        (Story, context) => {
            const [currentPage, setCurrentPage] = useState<number>(
                context.args.currentPage,
            );

            const numberOfPages = context.args.numberOfPages;

            const onPageChange = (newPage: number, fromPage: number) => {
                if (newPage > 0 && newPage <= numberOfPages) {
                    setCurrentPage(newPage);
                }
            };

            return (
                <div>
                    <PaginationComponent
                        currentPage={currentPage}
                        numberOfPages={numberOfPages}
                        onPageChange={onPageChange}
                    />
                </div>
            );
        },
    ],
};
