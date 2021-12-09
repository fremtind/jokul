import { TextArea, Props as TextAreaPropsInterface } from "./TextArea";
import { TextInput, Props as TextInputPropsInterface } from "./TextInput";
import { BaseInputField, Props as BaseInputPropsInterface } from "./BaseInputField";
export type { AutosuggestProps } from "./autosuggest";
import { Autosuggest } from "./autosuggest";

interface BaseInputProps extends BaseInputPropsInterface {}
interface TextInputProps extends TextInputPropsInterface {}
interface TextAreaProps extends TextAreaPropsInterface {}

export { TextArea, TextAreaProps, TextInput, TextInputProps, BaseInputField, BaseInputProps, Autosuggest };
