
import 'regenerator-runtime/runtime'
import "@testing-library/jest-dom/extend-expect";
import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter';
import { toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);