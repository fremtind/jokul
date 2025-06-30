import type { ReactRenderer } from "@storybook/react";
import { useEffect } from "react";
import type { DecoratorFunction } from "storybook/internal/types";

const setShowLayout = (element: HTMLElement, showLayout: boolean) => {
    showLayout
        ? element.classList.add("show-layout")
        : element.classList.remove("show-layout");
};

const hideLayout = (element: HTMLElement) => {
    element.classList.remove("show-layout");
};

export const layoutGlobal = {
    description:
        "Vis omriss og skravering alle steder layout-komponenter er brukt i eksemplene.",
    toolbar: {
        title: "Layout-omriss",
        icon: "contrast",
        items: [
            { title: "Skjul", value: false },
            { title: "Vis", value: true },
        ],
    },
};

export const layoutDecorator: DecoratorFunction<ReactRenderer> = (
    Story,
    context,
) => {
    useEffect(() => {
        const body = window.document.body;
        hideLayout(body);
        setShowLayout(body, context.globals.layout);

        return () => hideLayout(body);
    }, [context.globals.layout]);

    return <Story />;
};
