import React from "react";
import { DevExample } from "../../../../../../utils/dev-example";
import { ToastExample, toastExampleKnobs } from "./ToastExample";
import { ToastStickerSheet, toastStickerSheetKnobs } from "./ToastStickerSheet";

export default function Example() {
    return (
        <>
            <DevExample component={ToastExample} knobs={toastExampleKnobs} />
            <DevExample component={ToastStickerSheet} knobs={toastStickerSheetKnobs} />
        </>
    );
}
