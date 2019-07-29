import { visualRegressionTest } from "../../../jest/VisualRegressionTest";
import { name } from "../package.json";

visualRegressionTest(name, { timeout: 600 });
