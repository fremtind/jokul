import React from "react";
import { cleanup, render } from "@testing-library/react";
import { UnorderedList, OrderedList, ListItem } from "../src";

afterEach(cleanup);

test(`List and ListItem should render as expected`, () => {
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
