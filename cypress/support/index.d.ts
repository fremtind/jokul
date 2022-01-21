/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
        /**
         * Ta snapshots av komponenten i lyst og mørkt tema.
         *
         * @example
         * cy.takeSnapshots({
         *     variants: ["Info", "Success", "Warning", "Error"],
         *     setup: () => {
         *         cy.setDismissable();
         *     },
         *     teardown: () => {
         *         cy.resetDismissable();
         *     },
         * });
         */
        takeSnapshots(options: TakeSnapshotsOptions<Subject>): Chainable<Subject>;
        getByTestid: (field: string) => Chainable<Subject>;
        /** Navigerer til komponentens side i portalen og verifiserer at det finnes et synlig eksempel som kan testes */
        testComponent: (component: string) => Chainable<Subject>;
        checkInput: (inputName: string) => Chainable<Subject>;
        uncheckInput: (inputName: string) => Chainable<Subject>;
        /** For radioknapper */
        setChoice: (inputName: string) => Chainable<Subject>;
        toggleSelectMenu: (inputName: string) => Chainable<Subject>;
        selectValue: (inputName: string) => Chainable<Subject>;
        focusSelectValue: (inputName: string) => Chainable<Subject>;
        focusInput: (inputName: string) => Chainable<Subject>;
        focusTextArea: (inputName: string) => Chainable<Subject>;
        /** Gir deg alle komponenteksempler på siden. Om du har flere, bruk `.eq(index)` for å plukke riktig komponent. */
        getComponent: () => Chainable<Subject>;
        /**
         * Den eneste måten du får lov til å kalle `.wait()` ;)
         *
         * @default 300
         */
        waitForAnimation: (timeout: number) => Chainable<Subject>;
        setCompact: () => Chainable<Subject>;
        resetCompact: () => Chainable<Subject>;
        setInline: () => Chainable<Subject>;
        resetInline: () => Chainable<Subject>;
        setMedFeil: () => Chainable<Subject>;
        resetMedFeil: () => Chainable<Subject>;
        setUtvidetVelger: () => Chainable<Subject>;
        resetUtvidetVelger: () => Chainable<Subject>;
        setMedHjelpetekst: () => Chainable<Subject>;
        resetMedHjelpetekst: () => Chainable<Subject>;
        setDarkMode: () => Chainable<Subject>;
        resetDarkMode: () => Chainable<Subject>;
        setByttVerdi: () => Chainable<Subject>;
        resetByttVerdi: () => Chainable<Subject>;
        setwithLoader: () => Chainable<Subject>;
        resetwithLoader: () => Chainable<Subject>;
        setisLoading: () => Chainable<Subject>;
        resetisLoading: () => Chainable<Subject>;
        setDismissable: () => Chainable<Subject>;
        resetDismissable: () => Chainable<Subject>;
    }

    type TakeSnapshotsOptions<Subject> = {
        /**
         * Gjør det du trenger for å gjøre klart eksempelet for snapshot.
         *
         * Funksjon som kalles før hver snapshot (altså to ganger per `takeSnapshot`).
         * Om du opplever at dark mode sin snapshot ikke er som du forventer må du nok
         * sørge for å tilbakestille endringer du har gjort i `teardown`.
         */
        setup?: () => void;
        /**
         * "Rydd opp etter deg".
         *
         * Funksjonen kalles etter hver snapshot. Selve eksempelet vil rerendere etter
         * at dark mode er skrudd på, men alt av valg gjort i "knobs" vil bestå. Men, siden
         * du kanskje trenger noe av det som ble gjort i `setup` _også i dark mode_ vil `setup`
         * kjøres på nytt. Da kan du oppleve at "knobs" ikke er i tilstanden du forventer, avhengig
         * av hvordan du setter dem i `setup`. Bruk idempotente metoder i `setup`, eller reset
         * tilstanden her i `teardown` slik at hvert kall til `setup` jobber med blanke ark.
         */
        teardown?: () => void;
        /**
         * Flere komponenter har gjerne varianter hvordu ønsker å gjøre samme test.
         * Gitt at du har en "knob" ved navn "Variant" kan du sende inn en liste med variantnavn her,
         * og takeSnapshots vil loope igjennom lista og teste variant.
         */
        variants?: string[];
        /**
         * Sendes til `cy.getComponent().eq()`. Bruk hvis du har flere komponenter på siden under test.
         *
         * @default 0
         */
        eq?: number;
        /** Om du skal ta snapshot av noe annet enn hele eksempelet kan du gjøre queryen din i denne funksjonen */
        customSelector?: () => Chainable<Subject>;
    };
}
