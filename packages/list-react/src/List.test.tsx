import React from "react";
import { cleanup, render } from "@testing-library/react";
import { UnorderedList, OrderedList, ListItem } from "../src";
import { axe } from "jest-axe";

afterEach(cleanup);

describe("List", () => {
    test(`UnorderedList and ListItem should render as expected`, () => {
        const { getByText } = render(
            <UnorderedList>
                <ListItem>Kibogiedo</ListItem>
                <ListItem>Ovoopisow</ListItem>
                <ListItem>Omocebig</ListItem>
            </UnorderedList>,
        );
        expect(getByText("Kibogiedo")).toBeInTheDocument();
        expect(getByText("Ovoopisow")).toBeInTheDocument();
        expect(getByText("Omocebig")).toBeInTheDocument();
    });

    test(`OrderedList and ListItem should render as expected`, () => {
        const { getByText } = render(
            <OrderedList>
                <ListItem>Kibogiedo</ListItem>
                <ListItem>Ovoopisow</ListItem>
                <ListItem>Omocebig</ListItem>
            </OrderedList>,
        );
        expect(getByText("Kibogiedo")).toBeInTheDocument();
        expect(getByText("Ovoopisow")).toBeInTheDocument();
        expect(getByText("Omocebig")).toBeInTheDocument();
    });

    test(`List gets the passed className`, () => {
        const { getByTestId } = render(
            <UnorderedList className="jkl-lead">
                <ListItem>Kibogiedo</ListItem>
                <ListItem>Ovoopisow</ListItem>
            </UnorderedList>,
        );
        expect(getByTestId("jkl-list")).toHaveClass("jkl-lead");
    });

    test(`Nested lists should render all elements as expected`, () => {
        const { getByText } = render(
            <UnorderedList>
                <ListItem>Kibogiedo</ListItem>
                <ListItem>Ovoopisow</ListItem>
                <ListItem>
                    Omocebig
                    <UnorderedList>
                        <ListItem>Ramzoge</ListItem>
                    </UnorderedList>
                </ListItem>
            </UnorderedList>,
        );
        expect(getByText("Kibogiedo")).toBeInTheDocument();
        expect(getByText("Ovoopisow")).toBeInTheDocument();
        expect(getByText("Omocebig")).toBeInTheDocument();
        expect(getByText("Ramzoge")).toBeInTheDocument();
    });
});

describe("a11y", () => {
    test("unordered list should be a11y compliant", async () => {
        const { container } = render(
            <UnorderedList>
                <ListItem>Listeelement 1</ListItem>
                <ListItem>Listeelement 2</ListItem>
                <ListItem>Listelement 3</ListItem>
            </UnorderedList>,
        );
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });

    test("ordered list should be a11y compliant", async () => {
        const { container } = render(
            <OrderedList>
                <ListItem>Steg 1</ListItem>
                <ListItem>
                    Steg 2
                    <OrderedList>
                        <ListItem>Steg 2a</ListItem>
                        <ListItem>Steg 2b</ListItem>
                    </OrderedList>
                </ListItem>
                <ListItem>Steg 3</ListItem>
                <ListItem>Steg 4</ListItem>
                <ListItem>Steg 5</ListItem>
                <ListItem>Steg 6</ListItem>
                <ListItem>Steg 7</ListItem>
                <ListItem>Steg 8</ListItem>
                <ListItem>Steg 9</ListItem>
                <ListItem>Steg 10</ListItem>
            </OrderedList>,
        );
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
