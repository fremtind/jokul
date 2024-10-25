import React from "react";
import { Button } from "../Button.js";

export const AnchorsExample = () => {
    /* -- EXAMPLE CODE START -- */
    return (
        <div className="flex flex-column gap-32 justify-between items-center">
            <Button as="a" variant="primary" href="/komponenter/buttons#knapper-rendret-som-andre-elementer">
                Send inn
            </Button>
            <Button variant="secondary" as="a" href="/komponenter/buttons#knapper-rendret-som-andre-elementer">
                Lagre
            </Button>
            <Button variant="tertiary" as="a" href="/komponenter/buttons#knapper-rendret-som-andre-elementer">
                Avbryt
            </Button>
            <Button variant="ghost" as="a" href="/komponenter/buttons#knapper-rendret-som-andre-elementer">
                Vis mer
            </Button>
        </div>
    );
    /* -- EXAMPLE CODE END -- */
};
