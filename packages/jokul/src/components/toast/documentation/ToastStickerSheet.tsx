import React, { FC } from "react";
import { ExampleComponentProps, ExampleKnobsProps } from "../../../../../../doc-utils";
import { Toast } from "../Toast";

export const toastStickerSheetKnobs: ExampleKnobsProps = {};

const getKey = () => String(Date.now());

const mockState = {
    add: () => {
        return getKey();
    },
    remove: () => {},
    close: () => {},
    pauseAll() {},
    resumeAll() {},
    visibleToasts: [],
};

export const ToastStickerSheet: FC<ExampleComponentProps> = () => {
    return (
        <div
            className="jkl-toast-region__toasts"
            style={{
                position: "relative",
            }}
        >
            <Toast
                state={mockState}
                toast={{
                    key: getKey(),
                    content: {
                        title: "Nytt i Jøkul",
                        content: (
                            <p>
                                Les mer om{" "}
                                <a className="jkl-link" href="/komponenter/toast/">
                                    Toast
                                </a>{" "}
                                på komponentsiden.
                            </p>
                        ),
                    },
                }}
            />
            <Toast
                state={mockState}
                toast={{
                    key: getKey(),
                    content: { content: "Navn Navnesen er fjernet som reell rettighetshaver" },
                    variant: "success",
                }}
            />
            <Toast
                state={mockState}
                toast={{
                    key: getKey(),
                    content: { content: "Saken går til automatisk behandling" },
                    variant: "info",
                }}
            />
            <Toast
                state={mockState}
                toast={{
                    key: getKey(),
                    content: {
                        title: "Mistet internettforbindelsen",
                        content:
                            "Du kan fortsette å fylle ut skjemaet, men får ikke lagret før forbindelsen er tilbake.",
                    },
                    variant: "warning",
                }}
            />
            <Toast
                state={mockState}
                toast={{
                    key: getKey(),
                    content: {
                        title: "Ingen internettforbindelse",
                        content: "Du kan ikke lagre før forbindelsen er tilbake.",
                    },
                    variant: "error",
                }}
            />
        </div>
    );
};
