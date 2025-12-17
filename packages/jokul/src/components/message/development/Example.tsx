import { DevExample } from "utils/dev-example/DevExample.js";
import {
    FormErrorMessageExample,
    formErrorMessageKnobs,
} from "./FormErrorMessageExample.js";
import { MessageExample, messageExampleKnobs } from "./MessageExample.js";

export default function Example() {
    return (
        <>
            <DevExample
                component={MessageExample}
                knobs={messageExampleKnobs}
            />
            <DevExample
                component={FormErrorMessageExample}
                knobs={formErrorMessageKnobs}
            />
        </>
    );
}
