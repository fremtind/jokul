import { render, screen } from "@testing-library/react";
import React from "react";
import { Tag, SuccessTag, ErrorTag, WarningTag, InfoTag } from "./Tag";

describe("Tag", () => {
    it("skal rendre en standard tag", () => {
        render(<Tag>Standard Tag</Tag>);
        expect(screen.getByText("Standard Tag")).toBeInTheDocument();
        expect(screen.getByText("Standard Tag")).toHaveClass("jkl-tag");
    });

    it("skal rendre en info tag", () => {
        render(<InfoTag>Info Tag</InfoTag>);
        expect(screen.getByText("Info Tag")).toBeInTheDocument();
        expect(screen.getByText("Info Tag")).toHaveClass("jkl-tag--info");
    });

    it("skal rendre en error tag", () => {
        render(<ErrorTag>Error Tag</ErrorTag>);
        expect(screen.getByText("Error Tag")).toBeInTheDocument();
        expect(screen.getByText("Error Tag")).toHaveClass("jkl-tag--error");
    });

    it("skal rendre en warning tag", () => {
        render(<WarningTag>Warning Tag</WarningTag>);
        expect(screen.getByText("Warning Tag")).toBeInTheDocument();
        expect(screen.getByText("Warning Tag")).toHaveClass("jkl-tag--warning");
    });

    it("skal rendre en success tag", () => {
        render(<SuccessTag>Success Tag</SuccessTag>);
        expect(screen.getByText("Success Tag")).toBeInTheDocument();
        expect(screen.getByText("Success Tag")).toHaveClass("jkl-tag--success");
    });
});
