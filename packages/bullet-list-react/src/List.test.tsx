import React from "react";
import { cleanup, render } from "@testing-library/react";
import { Ul, Li } from ".";

describe("bullet list, Ul and Li", () => {
    afterEach(cleanup);

    test(`ul and li should not explode`, () => {
        const { getByText } = render(
            <Ul>
                <Li>Kibogiedo</Li>
                <Li>Ovoopisow</Li>
                <Li>Omocebig</Li>
                <Li nested>Ramzoge</Li>
            </Ul>,
        );
        expect(getByText("Kibogiedo")).toBeInTheDocument();
        expect(getByText("Ovoopisow")).toBeInTheDocument();
        expect(getByText("Omocebig")).toBeInTheDocument();
        expect(getByText("Ramzoge")).toBeInTheDocument();
    });

    test(`ul lead and li should not explode`, () => {
        const { getByText } = render(
            <Ul lead>
                <Li>Kibogiedo</Li>
                <Li>Ovoopisow</Li>
                <Li>Omocebig</Li>
                <Li nested>Ramzoge</Li>
            </Ul>,
        );
        expect(getByText("Kibogiedo")).toBeInTheDocument();
        expect(getByText("Ovoopisow")).toBeInTheDocument();
        expect(getByText("Omocebig")).toBeInTheDocument();
        expect(getByText("Ramzoge")).toBeInTheDocument();
    });
});
