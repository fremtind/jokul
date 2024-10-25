import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import { axe } from "vitest-axe";
import { Breadcrumb } from "./Breadcrumb.js";
import { BreadcrumbItem } from "./BreadcrumbItem.js";

describe("Breadcrumb", () => {
    it("should render", () => {
        render(
            <Breadcrumb>
                <BreadcrumbItem>
                    <a href="/">Hjem</a>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <a href="/komponenter/accordion">Komponenter</a>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <a href="/komponenter/breadcrumb">Breadcrumb</a>
                </BreadcrumbItem>
            </Breadcrumb>,
        );

        screen.getByText("Breadcrumb");
    });

    it("should be a11y compliant", async () => {
        const { container } = render(
            <Breadcrumb>
                <BreadcrumbItem>
                    <a href="/">Hjem</a>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <a href="/komponenter/accordion">Komponenter</a>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <a href="/komponenter/breadcrumb">Breadcrumb</a>
                </BreadcrumbItem>
            </Breadcrumb>,
        );
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
