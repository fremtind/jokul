import React from "react";
import { DevExample } from "../../../doc-utils";
import { ContentToggleExample } from "./ContentToggleExample";
import "../../content-toggle/content-toggle.scss";

export default function Client() {
    return (
        <DevExample
            knobs={{
                boolProps: ["Bytt verdi"],
                choiceProps: [
                    {
                        name: "Variant",
                        values: ["flip", "fade"],
                        defaultValue: 0,
                    },
                ],
            }}
            component={ContentToggleExample}
        />
    );
}
