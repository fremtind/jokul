import { DevExample } from "utils/dev-example/DevExample.js";
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
