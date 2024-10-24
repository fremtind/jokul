import clsx from "clsx";
import React from "react";
import { Density, WithChildren } from "../../core/types.js";
import { useId } from "../../hooks/useId/useId.js";
import { DismissButton } from "../message/DismissButton.js";
import { MessageIcon } from "./common/MessageIcon.js";

type messageTypes = "info" | "error" | "success" | "warning";

interface Props extends WithChildren {
    id?: string;
    className?: string;
    density?: Density;
    maxContentWidth?: string;
    paddingLeft?: string;
    /** Overstyr standardrollen til meldingen. Om du ønsker å "skru av" rollen kan du bruke verdien `none presentation`. */
    role?: string;
    dismissed?: boolean;
    dismissAction?: {
        handleDismiss: () => void;
        buttonTitle?: string;
    };
}

function systemFactory(messageType: messageTypes): React.FC<Props> {
    const SystemMessage: React.FC<Props> = ({
        id,
        className,
        density,
        maxContentWidth,
        paddingLeft,
        role = "status",
        dismissed,
        dismissAction,
        children,
        ...rest
    }) => {
        const systemId = useId(id || "jkl-system-message", { generateSuffix: !id });

        return (
            <div
                role={role}
                {...rest}
                id={systemId}
                className={clsx("jkl-system-message", "jkl-system-message--" + messageType, className, {
                    "jkl-system-message--dismissed": dismissed,
                })}
                data-density={density}
            >
                <div
                    className="jkl-system-message__content"
                    data-testid="system-message-content"
                    data-theme="light"
                    style={{
                        maxWidth: maxContentWidth,
                        paddingLeft,
                    }}
                >
                    <MessageIcon messageType={messageType} />
                    <span className="jkl-system-message__message">{children}</span>
                    {dismissAction?.handleDismiss && (
                        <DismissButton
                            aria-controls={systemId}
                            className="jkl-system-message__dismiss-button"
                            label={dismissAction.buttonTitle || "Lukk"}
                            onClick={dismissAction.handleDismiss}
                        />
                    )}
                </div>
            </div>
        );
    };
    return SystemMessage;
}

export const InfoSystemMessage = systemFactory("info");
InfoSystemMessage.displayName = "InfoSystemMessage";
export const ErrorSystemMessage = systemFactory("error");
ErrorSystemMessage.displayName = "ErrorSystemMessage";
export const WarningSystemMessage = systemFactory("warning");
WarningSystemMessage.displayName = "WarningSystemMessage";
export const SuccessSystemMessage = systemFactory("success");
SuccessSystemMessage.displayName = "SuccessSystemMessage";
