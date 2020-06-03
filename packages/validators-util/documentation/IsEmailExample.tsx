import React from "react";
import { isEmail } from "../src";

import "./index.scss";

const IsEmailExample = () => {
    return (
        <section>
            <p>
                isEmail({`"glenn@me.com"`}) = {isEmail("glenn@me.com").toString()}
            </p>
            <br />
            <p>
                isEmail({`"glenn@me"`}) = {isEmail("glenn@me").toString()}
            </p>
        </section>
    );
};

export default IsEmailExample;
