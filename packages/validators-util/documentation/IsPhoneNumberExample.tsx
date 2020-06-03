import React from "react";
import { isPhoneNumber } from "../src";

import "./index.scss";

const IsPhoneNumberExample = () => {
    return (
        <section>
            <p>
                isPhoneNumber({`"12345678"`}) = {isPhoneNumber("12345678").toString()}
            </p>
            <br />
            <p>
                isPhoneNumber({`"1a2 34 5677"`}) = {isPhoneNumber("1a2 34 5677").toString()}
            </p>
        </section>
    );
};

export default IsPhoneNumberExample;
