import pkg from "../package.json";
import { e2eTest } from "../../../jest/e2e-a11y-util";

e2eTest({ port: 1111, packageName: pkg.name.slice(14) });
