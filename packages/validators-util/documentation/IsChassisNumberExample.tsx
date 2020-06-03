import React from "react";
import { isChassisNumber } from "../src";

import "./index.scss";

const isChassisNumberExample = () => {
    return (
        <section>
            <p>
                isChassisNumber({`"123456789"`}) = {isChassisNumber("123456789").toString()}
            </p>
            <br />
            <p>
                isChassisNumber({`"123A456"`}) = {isChassisNumber("123A456").toString()}
            </p>
        </section>
    );
};

export default isChassisNumberExample;
