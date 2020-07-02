import React from "react";
import { isValidTelefonnummer } from "../src";

import "./index.scss";

const IsValidTelefonnummerExample = () => {
    return (
        <section>
            <p>
                isValidTelefonnummer({`"12345678"`}) = {isValidTelefonnummer("12345678").toString()}
            </p>
            <br />
            <p>
                isValidTelefonnummer({`"1a2 34 5677"`}) = {isValidTelefonnummer("1a2 34 5677").toString()}
            </p>
        </section>
    );
};

export default IsValidTelefonnummerExample;
