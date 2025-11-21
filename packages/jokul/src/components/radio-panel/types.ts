import type { FieldGroupProps } from "../input-group/index.js";
import type { InputPanelProps } from "../input-panel/types.js";

export type RadioPanelProps = Omit<InputPanelProps, "type">;

/**
 * @deprecated bruk heller {@link FieldGroupProps}
 */
export type RadioPanelGroupProps = FieldGroupProps;
