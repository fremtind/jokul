import React from "react";
import { cleanup, render } from "@testing-library/react";
import { InfoMessage, ErrorMessage, SuccessMessage, WarningMessage } from ".";

describe("Message boxes", () => {
    afterEach(cleanup);

    [true, false].map((fullWidth) => {
        [InfoMessage, ErrorMessage, SuccessMessage, WarningMessage].map((E) => {
            it("should render message title and content", () => {
                const { getByText } = render(
                    <E fullWidth={fullWidth} title="test">
                        content
                    </E>,
                );
                getByText("content");
                getByText("test");
            });
        });
    });
});
