import { jest } from "@jest/globals";
import { render } from "@testing-library/react";
import React from "react";
import { PortalLogo } from "./PortalLogo";

describe("PortalLogo", () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    it("becomes spooky on October 31st", () => {
        jest.setSystemTime(new Date("2022-10-31"));
        const { getByText } = render(<PortalLogo />);

        expect(getByText("Bøkul 🎃")).toBeInTheDocument();
    });

    it("is not spooky otherwise", () => {
        jest.setSystemTime(new Date("2022-10-30"));
        const { getByText } = render(<PortalLogo />);

        expect(getByText("Jøkul")).toBeInTheDocument();
    });
});
