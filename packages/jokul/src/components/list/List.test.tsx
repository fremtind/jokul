import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import { axe } from "vitest-axe";
import { CheckListItem, CrossListItem, List, ListItem, OrderedList, UnorderedList } from "./index.js";

describe("List", () => {
    it(`UnorderedList and ListItem should render as expected`, () => {
        render(
            <UnorderedList>
                <ListItem>Kibogiedo</ListItem>
                <ListItem>Ovoopisow</ListItem>
                <ListItem>Omocebig</ListItem>
            </UnorderedList>,
        );
        expect(screen.getByText("Kibogiedo")).toBeInTheDocument();
        expect(screen.getByText("Ovoopisow")).toBeInTheDocument();
        expect(screen.getByText("Omocebig")).toBeInTheDocument();
    });

    it(`OrderedList and ListItem should render as expected`, () => {
        render(
            <OrderedList>
                <ListItem>Kibogiedo</ListItem>
                <ListItem>Ovoopisow</ListItem>
                <ListItem>Omocebig</ListItem>
            </OrderedList>,
        );
        expect(screen.getByText("Kibogiedo")).toBeInTheDocument();
        expect(screen.getByText("Ovoopisow")).toBeInTheDocument();
        expect(screen.getByText("Omocebig")).toBeInTheDocument();
    });

    it(`List gets the passed className`, () => {
        render(
            <UnorderedList className="jkl-body">
                <ListItem>Kibogiedo</ListItem>
                <ListItem>Ovoopisow</ListItem>
            </UnorderedList>,
        );
        expect(screen.getByTestId("jkl-list")).toHaveClass("jkl-body");
    });

    it(`ListItem gets the passed className`, () => {
        render(
            <UnorderedList>
                <ListItem className="jkl-body">Kibogiedo</ListItem>
            </UnorderedList>,
        );
        expect(screen.getByTestId("jkl-list-item")).toHaveClass("jkl-body");
    });

    it(`Nested lists should render all elements as expected`, () => {
        render(
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
        expect(screen.getByText("Kibogiedo")).toBeInTheDocument();
        expect(screen.getByText("Ovoopisow")).toBeInTheDocument();
        expect(screen.getByText("Omocebig")).toBeInTheDocument();
        expect(screen.getByText("Ramzoge")).toBeInTheDocument();
    });
});

describe("a11y", () => {
    it("unordered list should be a11y compliant", async () => {
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

    it("ordered list should be a11y compliant", async () => {
        const { container } = render(
            <>
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
                </OrderedList>
                <List>
                    <CheckListItem>dekkes</CheckListItem>
                    <CrossListItem>dekkes ikke</CrossListItem>
                </List>
            </>,
        );
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
