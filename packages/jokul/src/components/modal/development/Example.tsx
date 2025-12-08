import { DevExample } from "utils/dev-example/DevExample.js";
import ModalExample, { dialogExampleKnobs } from "./ModalExample.js";

export default function Example() {
    return <DevExample component={ModalExample} knobs={dialogExampleKnobs} />;
}
