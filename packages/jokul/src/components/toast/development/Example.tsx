import { DevExample } from "doc-utils/DevExample.js";
import React from "react";
import { ToastExample, toastExampleKnobs } from "./ToastExample.js";
import {
    ToastStickerSheet,
    toastStickerSheetKnobs,
} from "./ToastStickerSheet.js";

export default function Example() {
    return (
        <>
            <DevExample
                component={ToastStickerSheet}
                knobs={toastStickerSheetKnobs}
            />
            <DevExample component={ToastExample} knobs={toastExampleKnobs} />
        </>
    );
}
