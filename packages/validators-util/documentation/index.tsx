import React from "react";

// Import utils for showing example
import { renderExample, DevExample } from "../../../doc-utils";

// Import actual example and component stylesheet (specific for this component):
import IsValidEpostExample from "./IsValidEpostExample";
import IsValidTelefonnummerExample from "./IsValidTelefonnummerExample";
import IsRegistreringsNumberExample from "./IsValidRegistreringsnummerExample";
import IsValidChassisnummerExample from "./IsValidChassisnummerExample";
import IsValidDogIdExample from "./IsValidDogIdExample";

renderExample(
    <>
        <DevExample component={IsValidDogIdExample} />
        <DevExample component={IsValidEpostExample} />
        <DevExample component={IsValidTelefonnummerExample} />
        <DevExample component={IsRegistreringsNumberExample} />
        <DevExample component={IsValidChassisnummerExample} />
    </>,
    document.getElementById("app"),
);
