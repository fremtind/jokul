import React, { useCallback, useState } from "react";
import { Button } from "../Button.js";

export const ButtonExample = () => {
    /* -- EXAMPLE CODE START -- */
    const [showLoader, setShowLoader] = useState(false);

    const simulateLoading = useCallback(() => {
        setShowLoader(true);
        setTimeout(() => {
            setShowLoader(false);
        }, 2200);
    }, []);

    return (
        <div className="flex flex-column gap-32 justify-between items-center">
            <Button
                variant="primary"
                loader={{
                    showLoader,
                    textDescription: "Laster innhold",
                }}
                onClick={simulateLoading}
            >
                Lagre og send inn
            </Button>
            <Button
                variant="secondary"
                loader={{
                    showLoader,
                    textDescription: "Laster innhold",
                }}
                onClick={simulateLoading}
            >
                Lagre
            </Button>
            <Button
                variant="tertiary"
                loader={{
                    showLoader,
                    textDescription: "Laster innhold",
                }}
                onClick={simulateLoading}
            >
                Avbryt
            </Button>

            <Button variant="ghost">Ola Nordmann</Button>
        </div>
    );
    /* -- EXAMPLE CODE END -- */
};
