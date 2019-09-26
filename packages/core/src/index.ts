import { labelVariant } from "./types";

// Workaround for Babels --isolatedModules setting
// see https://github.com/facebook/create-react-app/issues/6054
export type labelVariant = labelVariant;
export { initTabListener } from "./utils";
