import React from "react";
import { PageSection } from "~/block-renderers/page-sections";

export const TabNotFound = () => (
    <PageSection title="Her var det tomt!">
        <p className="jkl-body">
            Fanen du forsøker å vise finnes ikke, eller har blitt flyttet. Velg en annen fane med en av lenkene over.
        </p>
    </PageSection>
);
