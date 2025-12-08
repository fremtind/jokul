import type { ExampleKnobsProps } from "utils/dev-example/index.js";
import { Breadcrumb } from "../Breadcrumb.js";
import { BreadcrumbItem } from "../BreadcrumbItem.js";

export const knobs: ExampleKnobsProps = {};

export const BreadcrumbExample = () => {
    /* -- EXAMPLE CODE START -- */
    return (
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
        </Breadcrumb>
    );
    /* -- EXAMPLE CODE END -- */
};
