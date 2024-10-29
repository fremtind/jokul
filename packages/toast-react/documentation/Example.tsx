import React from "react";
import { DevExample } from "../../../doc-utils";
import { ToastExample, toastExampleKnobs } from "./ToastExample";
import {
    ToastStickerSheet,
    toastStickerSheetKnobs,
    toastStickerSheetCode,
} from "./ToastStickerSheet";
import "../../icons/icons.scss";
import "../../icon-button/icon-button.scss";
import "../../progress-bar/progress-bar.scss";
import "../../toast/toast.scss";

export default function Example() {
    return (
        <>
            <DevExample
                component={ToastExample}
                codeExample={toastStickerSheetCode}
                knobs={toastExampleKnobs}
            />
            <DevExample
                component={ToastStickerSheet}
                codeExample={toastStickerSheetCode}
                knobs={toastStickerSheetKnobs}
            />
        </>
    );
}
