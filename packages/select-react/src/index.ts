import { Props as NativeSelectPropsInterface } from "./NativeSelect";
import { Props as SelectPropsInterface } from "./Select";

export { Select } from "./Select";
export { NativeSelect } from "./NativeSelect";

interface NativeSelectProps extends NativeSelectPropsInterface {}
interface SelectProps extends SelectPropsInterface {}

export { NativeSelectProps, SelectProps };
