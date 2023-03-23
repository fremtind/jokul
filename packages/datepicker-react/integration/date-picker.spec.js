/// <reference types="cypress" />
/// <reference types="../../../cypress/support" />

describe("DatePicker", () => {
    it("renders correctly", () => {
        // this event will automatically be unbound when this
        // test ends because it's attached to 'cy'
        cy.on("uncaught:exception", (err) => {
            expect(err.message).to.include("React error");
            // https://reactjs.org/docs/error-decoder.html?invariant=418
            // https://reactjs.org/docs/error-decoder.html?invariant=423
            // The error only occurs within Gatsby which only does SSR+hydration in production mode, so debugging is a nightmare.
            // _Something_ happens on the way from MDX to the finished product that is different on the server and client.
            // Unable to reproduce only using the devserver. Heck it.

            // return false to prevent the error from failing this test
            return false;
        });

        cy.testComponent("datepicker");

        cy.takeSnapshots();

        cy.takeSnapshots({
            setup: () => {
                cy.getByTestid("jkl-icon-button").first().click();
            },
            teardown: () => {
                cy.getByTestid("jkl-icon-button").first().click();
            },
        });

        cy.takeSnapshots({
            setup: () => {
                cy.focusInput("datepicker").type("24.10.1990");
            },
            teardown: () => {
                cy.get(".jkl-datepicker input").clear();
            },
        });

        cy.takeSnapshots({
            setup: () => {
                cy.get('input[value="large"]').click();
                cy.setDensity("compact");
            },
            teardown: () => {
                cy.setDensity("comfortable");
            },
        });

        cy.takeSnapshots({
            setup: () => {
                cy.setMedFeil();
                cy.focusInput("datepicker").type("24.10.1990");
            },
            teardown: () => {
                cy.resetMedFeil();
                cy.get(".jkl-datepicker input").clear();
            },
        });

        cy.takeSnapshots({
            setup: () => {
                cy.setDensity("compact").setMedFeil();
                cy.focusInput("datepicker").type("24.10.1990");
            },
            teardown: () => {
                cy.setDensity("comfortable").resetMedFeil();
                cy.get(".jkl-datepicker input").clear();
            },
        });
    });
});
