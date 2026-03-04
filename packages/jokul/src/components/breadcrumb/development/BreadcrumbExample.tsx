import React from "react";
import type { ExampleKnobsProps } from "utils/dev-example/index.js";
import { Link } from "../../link/Link.jsx";
import { Breadcrumb } from "../Breadcrumb.js";
import { BreadcrumbItem } from "../BreadcrumbItem.js";

export const knobs: ExampleKnobsProps = {};

export const BreadcrumbExample = () => {
    /* -- EXAMPLE CODE START -- */
    return (
        <Breadcrumb>
            <BreadcrumbItem>
                <Link href="/">Hjem</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <Link href="/komponenter/accordion">Komponenter</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <Link href="/komponenter/breadcrumb">Breadcrumb</Link>
            </BreadcrumbItem>
        </Breadcrumb>
    );
    /* -- EXAMPLE CODE END -- */
};
