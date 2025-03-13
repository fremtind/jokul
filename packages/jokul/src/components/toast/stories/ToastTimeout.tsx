import React, { useEffect } from "react";
import "../styles/_index.scss";
import "../../button/styles/_index.scss";
import "../../radio-button/styles/_index.scss";
import "../../text-input/styles/_index.scss";
import { Button } from "../../button/Button.js";
import { useToast } from "../index.js";

export function ToastTimeoutExample() {
    const { add } = useToast();
    const milliseconds = 30000;
    const seconds = ((milliseconds % 60000) / 1000).toFixed(0);

    return (
        <Button
            onClick={() => {
                add(
                    {
                        content: (
                            <p>Du blir logget ut om {seconds} sekunder.</p>
                        ),
                    },
                    { timeout: milliseconds },
                );
            }}
        >
            Vis med timeout
        </Button>
    );
}
