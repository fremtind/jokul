import React from "react";
import { DevExample } from "../../../doc-utils";
import { AlertMessageExample } from "./AlertMessageExample";
import "../../alert-message/alert-message.scss";

export default function Client() {
    return (
        <DevExample
            component={AlertMessageExample}
            knobs={{
                boolProps: ["Avvisbar"],
                choiceProps: [
                    {
                        name: "Type",
                        values: ["Infomelding", "Suksessmelding", "Advarselmelding", "Feilmelding"],
                        defaultValue: 0,
                    },
                ],
            }}
        />
    );
}
