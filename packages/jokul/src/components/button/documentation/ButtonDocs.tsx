import React, { useCallback, useState } from "react";
import { Flex } from "../../flex/Flex.js";
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
        <Flex
            direction="column"
            gap="lg"
            justifyContent="space-between"
            alignItems="center"
        >
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
        </Flex>
    );
    /* -- EXAMPLE CODE END -- */
};
