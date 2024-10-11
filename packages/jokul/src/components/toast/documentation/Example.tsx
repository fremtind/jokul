import React from "react";
import { DevExample } from "../../../../../../doc-utils";
import { ToastExample, toastExampleKnobs } from "./ToastExample";
import { ToastStickerSheet, toastStickerSheetKnobs } from "./ToastStickerSheet";

import "../../../../../../packages/webfonts/webfonts.scss";
import "../../../core/styles/core.scss";
import "../../../styles/styles.scss";

export default function Example() {
    return (
        <>
            <DevExample component={ToastExample} knobs={toastExampleKnobs} />
            <DevExample component={ToastStickerSheet} knobs={toastStickerSheetKnobs} />
        </>
    );
}
