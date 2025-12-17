import { DevExample } from "utils/dev-example/DevExample.js";
import {
    RadioButtonExample,
    radioButtonExampleKnobs,
} from "./RadioButtonExample.js";

export default function Example() {
    return (
        <DevExample
            component={RadioButtonExample}
            knobs={radioButtonExampleKnobs}
        />
    );
}
