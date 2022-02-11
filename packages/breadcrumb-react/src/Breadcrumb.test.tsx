import React from "react";
import { render, screen } from "@testing-library/react";
import { Breadcrumb } from ".";
import { axe } from "jest-axe";
import { BreadcrumbItem } from "./BreadcrumbItem";

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
