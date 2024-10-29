import { fireEvent } from "@testing-library/dom";
import { expect, test } from "vitest";
import { initTabListener } from "./tabListener.js";

const mouseNavigation = "data-mousenavigation";

test("should initialize data-mousenavigation to null before clicks or tabs", () => {
    initTabListener();

    const htmlElement = document.querySelector("html");

    if (!htmlElement) {
        throw "Something went wrong  - couldn't find body element";
    }

    expect(htmlElement.getAttribute(mouseNavigation)).toBe(null);
});

test("should add data-mousenavigation attribute to html when clicking a button", () => {
    initTabListener();

    const bodyElement = document.querySelector("body");
    const htmlElement = document.querySelector("html");

    if (!bodyElement || !htmlElement) {
        throw "Something went wrong  - couldn't find body element";
    }

    const buttonElement = document.createElement("button");
    bodyElement.appendChild(buttonElement);

    fireEvent(buttonElement, new MouseEvent("mousedown", { bubbles: true }));

    expect(htmlElement.getAttribute(mouseNavigation)).toBe("true");
});

test("should remove data-mousenavigation attribute on html when tabbing after a click", () => {
    initTabListener();

    const bodyElement = document.querySelector("body");
    const htmlElement = document.querySelector("html");

    if (!bodyElement || !htmlElement) {
        throw "Something went wrong  - couldn't find body element";
    }

    const buttonElement = document.createElement("button");
    bodyElement.appendChild(buttonElement);

    fireEvent(buttonElement, new MouseEvent("mousedown", { bubbles: true }));

    expect(htmlElement.getAttribute(mouseNavigation)).toBe("true");

    fireEvent(
        document,
        new KeyboardEvent("keydown", { key: "Tab", bubbles: true }),
    );

    expect(htmlElement.getAttribute(mouseNavigation)).toBe(null);
});
