import React from "react";
import { cleanup, render } from "@testing-library/react";
import { H1, H2, H3, H4, LeadParagraph, P, SmallParagraph, TinyParagraph } from ".";

describe("typography", () => {
    afterEach(cleanup);
    const text = "Hello Mr Universe";

    [H1, H2, H3, H4, LeadParagraph, P, SmallParagraph, TinyParagraph].forEach((element) => {
        test(`should not explode`, () => {
            const C = element;
            const { getByText } = render(<C>{text}</C>);
            getByText(text);
        });
    });

    [H1, H2, H3, H4].forEach((element) => {
        test(`should not explode`, () => {
            const C = element;
            const { getByText } = render(<C styledAs="h1">{text}</C>);
            getByText(text);
        });
    });
});
