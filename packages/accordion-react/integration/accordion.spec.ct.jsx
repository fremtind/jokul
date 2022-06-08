/// <reference types="cypress" />
/// <reference types="../../../cypress/support" />

import React from "react";
import { AccordionExample } from "../documentation/AccordionExample";

describe("Accordion", () => {
    beforeEach(() => {
        cy.mount(<AccordionExample />);
    });

    it("renders correctly", () => {
        cy.takeSnapshots();

        cy.takeSnapshots({
            setup: () => {
                cy.getByTestid("jkl-accordion-item").first().click();
            },
            teardown: () => {
                cy.getByTestid("jkl-accordion-item").first().click();
            },
        });
    });
});
