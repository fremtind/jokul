import React, { VFC } from "react";

import IsValidEpostExample from "./IsValidEpostExample";
import IsValidTelefonnummerExample from "./IsValidTelefonnummerExample";
import IsValidRegistreringsnummerExample from "./IsValidRegistreringsnummerExample";
import IsValidChassisnummerExample from "./IsValidChassisnummerExample";

const Example: VFC = () => (
    <>
        <IsValidEpostExample />
        <IsValidTelefonnummerExample />
        <IsValidRegistreringsnummerExample />
        <IsValidChassisnummerExample />
    </>
);

export default Example;
