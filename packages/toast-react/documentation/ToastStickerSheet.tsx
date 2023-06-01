import React, { FC } from "react";
import { ExampleComponentProps, ExampleKnobsProps, CodeExample } from "../../../doc-utils";
import { Toast } from "../src/Toast";

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

export const toastStickerSheetCode: CodeExample = () => `
import { ToastProvider } from "@fremtind/jkl-toast-react";

// Sett opp provider på appnivå
export function App({ children }) {
    return (
        <ToastProvider>
            {children}
        </ToastProvider>
    );
};

// Bruk i en komponent
import { useToast } from "@fremtind/jkl-toast-react";

function ToastUsageExample() {
    const { add } = useToast();

    // Vis bekreftelse på at handlingen er utført OK
    const onSuccess = React.useCallback(() => {
        add("Navn Navnesen er fjernet som reell rettighetshaver", { variant: "success" });
    }, [add]);

    // Eller vis en toast ved besøk
    React.useEffect(() => {
        if (localStorage.getItem("hasSeenToastAboutToast")) {
            return;
        }

        add(
            {
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
        );

        localStorage.setItem("hasSeenToastAboutToast", "true");
    }, [add]);
}
`;
