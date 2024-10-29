import {
    InfoMessageBox,
    ErrorMessageBox,
    SuccessMessageBox,
    WarningMessageBox,
} from "@fremtind/jkl-message-box-react";
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
                            <InfoMessageBox
                                fullWidth
                                key={index}
                                title={box.title || "Default title"}
                                className="jkl-spacing-l--top"
                            >
                                {box.description}
                            </InfoMessageBox>
                        );
                    case "error":
                        return (
                            <ErrorMessageBox
                                fullWidth
                                key={index}
                                title={box.title || "Default title"}
                                className="jkl-spacing-l--top"
                            >
                                {box.description}
                            </ErrorMessageBox>
                        );
                    case "success":
                        return (
                            <SuccessMessageBox
                                fullWidth
                                key={index}
                                title={box.title || "Default title"}
                                className="jkl-spacing-l--top"
                            >
                                {box.description}
                            </SuccessMessageBox>
                        );
                    case "warning":
                        return (
                            <WarningMessageBox
                                fullWidth
                                key={index}
                                title={box.title || "Default title"}
                                className="jkl-spacing-l--top"
                            >
                                {box.description}
                            </WarningMessageBox>
                        );
                    default:
                        return null;
                }
            })}
        </>
    );
};
