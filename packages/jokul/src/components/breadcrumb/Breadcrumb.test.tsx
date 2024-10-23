import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import React from "react";
import { Breadcrumb } from "./Breadcrumb.js";
import { BreadcrumbItem } from "./BreadcrumbItem.js";

describe("Breadcrumb", () => {
    test("should render", () => {
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

    test("should be a11y compliant", async () => {
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
