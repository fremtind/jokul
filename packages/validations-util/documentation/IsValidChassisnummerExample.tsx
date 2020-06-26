import React from "react";
import { isValidChassisnummer } from "../src";

import "./index.scss";

const IsValidChassisnummerExample = () => {
    return (
        <section>
            <p>
                isValidChassisnummer({`"123456789"`}) = {isValidChassisnummer("123456789").toString()}
            </p>
            <br />
            <p>
                isValidChassisnummer({`"123A456"`}) = {isValidChassisnummer("123A456").toString()}
            </p>
        </section>
    );
};

export default IsValidChassisnummerExample;
