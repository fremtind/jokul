import React from "react";
import { cleanup, render } from "@testing-library/react";
import { InfoMessage, ErrorMessage, SuccessMessage } from ".";

describe("Message boxes", () => {
    afterEach(cleanup);

    [InfoMessage, ErrorMessage, SuccessMessage].map((E) => {
        it("should render message title and content", () => {
            const { getByText } = render(<E title="test">content</E>);
            getByText("content");
            getByText("test");
        });
    });
});
