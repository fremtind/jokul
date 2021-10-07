import React, { VFC } from "react";
import { isValidDogId } from "../src";

import "./index.scss";

const IsValidDogIdExample: VFC = () => {
    const id1 = "578012345678912";
    const id2 = "578012345623432423423423423";
    const id3 = "123456789123456";
    const id4 = "doggo123";
    return (
        <section>
            <p>
                isValidDogId({`${id1}`}) = {isValidDogId(id1).toString()}
            </p>
            <br />
            <p>
                isValidDogId({`${id2}`}) = {isValidDogId(id2).toString()}
            </p>
            <br />
            <p>
                isValidDogId({`${id3}`}) = {isValidDogId(id3).toString()}
            </p>
            <br />
            <p>
                isValidDogId({`${id4}`}) = {isValidDogId(id4).toString()}
            </p>
        </section>
    );
};

export default IsValidDogIdExample;
