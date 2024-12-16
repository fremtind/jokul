import {
    InfoMessage,
    ErrorMessage,
    SuccessMessage,
    WarningMessage,
} from "@fremtind/jokul";
import React, { type FC } from "react";
import { type ContentBlockProps } from "./types";
import { assertBlockIs } from "./types";

export const MessageBoxBlock: FC<ContentBlockProps> = ({ contentBlock }) => {
    assertBlockIs("message-box", contentBlock);

    return (
        <>
            {contentBlock.boxes?.map((box, index) => {
                switch (box.type) {
                    case "info":
                        return (
                            <InfoMessage
                                fullWidth
                                key={index}
                                title={box.title || "Default title"}
                                className="jkl-spacing-l--top"
                            >
                                {box.description}
                            </InfoMessage>
                        );
                    case "error":
                        return (
                            <ErrorMessage
                                fullWidth
                                key={index}
                                title={box.title || "Default title"}
                                className="jkl-spacing-l--top"
                            >
                                {box.description}
                            </ErrorMessage>
                        );
                    case "success":
                        return (
                            <SuccessMessage
                                fullWidth
                                key={index}
                                title={box.title || "Default title"}
                                className="jkl-spacing-l--top"
                            >
                                {box.description}
                            </SuccessMessage>
                        );
                    case "warning":
                        return (
                            <WarningMessage
                                fullWidth
                                key={index}
                                title={box.title || "Default title"}
                                className="jkl-spacing-l--top"
                            >
                                {box.description}
                            </WarningMessage>
                        );
                    default:
                        return null;
                }
            })}
        </>
    );
};
