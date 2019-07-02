import React from "react";
import { cleanup, render } from "@testing-library/react";
import { BulletList, BulletListItem } from ".";

afterEach(cleanup);

test(`BulletList and BulletListItem should render as expected`, () => {
    const { getByText } = render(
        <BulletList>
            <BulletListItem>Kibogiedo</BulletListItem>
            <BulletListItem>Ovoopisow</BulletListItem>
            <BulletListItem>Omocebig</BulletListItem>
        </BulletList>,
    );
    expect(getByText("Kibogiedo")).toBeInTheDocument();
    expect(getByText("Ovoopisow")).toBeInTheDocument();
    expect(getByText("Omocebig")).toBeInTheDocument();
});

test(`Nested lists should render all elements as expected`, () => {
    const { getByText } = render(
        <BulletList className="jkl-lead">
            <BulletListItem>Kibogiedo</BulletListItem>
            <BulletListItem>Ovoopisow</BulletListItem>
            <BulletListItem>
                Omocebig
                <BulletList className="jkl-lead">
                    <BulletListItem>Ramzoge</BulletListItem>
                </BulletList>
            </BulletListItem>
        </BulletList>,
    );
    expect(getByText("Kibogiedo")).toBeInTheDocument();
    expect(getByText("Ovoopisow")).toBeInTheDocument();
    expect(getByText("Omocebig")).toBeInTheDocument();
    expect(getByText("Ramzoge")).toBeInTheDocument();
});
