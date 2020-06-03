import React from "react";
import { isRegistrationNumber } from "../src";

import "./index.scss";

const isRegistrationNumberExample = () => {
    return (
        <section>
            <p>
                isRegistrationNumber({`"AB12345"`}) = {isRegistrationNumber("AB12345").toString()}
            </p>
            <br />
            <p>
                isRegistrationNumber({`"A123456"`}) = {isRegistrationNumber("A123456").toString()}
            </p>
        </section>
    );
};

export default isRegistrationNumberExample;
