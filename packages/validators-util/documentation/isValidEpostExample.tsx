import React from "react";
import { isValidEpost } from "../src";

import "./index.scss";

const isValidEpostExample = () => {
    return (
        <section>
            <p>
                isValidEpost({`"glenn@me.com"`}) = {isValidEpost("glenn@me.com").toString()}
            </p>
            <br />
            <p>
                isValidEpost({`"glenn@me"`}) = {isValidEpost("glenn@me").toString()}
            </p>
        </section>
    );
};

export default isValidEpostExample;
