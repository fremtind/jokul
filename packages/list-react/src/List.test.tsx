import React from "react";
import { cleanup, render } from "@testing-library/react";
import { List, ListItem } from "../src";

afterEach(cleanup);

test(`List and ListItem should render as expected`, () => {
    const { getByText } = render(
        <List>
            <ListItem>Kibogiedo</ListItem>
            <ListItem>Ovoopisow</ListItem>
            <ListItem>Omocebig</ListItem>
        </List>,
    );
    expect(getByText("Kibogiedo")).toBeInTheDocument();
    expect(getByText("Ovoopisow")).toBeInTheDocument();
    expect(getByText("Omocebig")).toBeInTheDocument();
});

test(`Nested lists should render all elements as expected`, () => {
    const { getByText } = render(
        <List className="jkl-lead">
            <ListItem>Kibogiedo</ListItem>
            <ListItem>Ovoopisow</ListItem>
            <ListItem>
                Omocebig
                <List className="jkl-lead">
                    <ListItem>Ramzoge</ListItem>
                </List>
            </ListItem>
        </List>,
    );
    expect(getByText("Kibogiedo")).toBeInTheDocument();
    expect(getByText("Ovoopisow")).toBeInTheDocument();
    expect(getByText("Omocebig")).toBeInTheDocument();
    expect(getByText("Ramzoge")).toBeInTheDocument();
});
