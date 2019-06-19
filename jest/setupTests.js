import { toMatchImageSnapshot } from "jest-image-snapshot";
import "jest-dom/extend-expect";

expect.extend({ toMatchImageSnapshot });
