/// <reference types="cypress" />
/// <reference types="../../../cypress/support" />

describe("FileUploader", () => {
    beforeEach(() => {
        cy.testComponent("fileuploader");
    });

    it("renders correctly", () => {
        cy.takeSnapshots();
    });
});
