import type { AutosuggestProps } from "./autosuggest";
import { Autosuggest } from "./autosuggest";
import { BaseInputField, Props as BaseInputPropsInterface } from "./BaseInputField";
import { TextArea, Props as TextAreaPropsInterface } from "./TextArea";
import { TextInput, Props as TextInputPropsInterface } from "./TextInput";

interface BaseInputProps extends BaseInputPropsInterface {}
interface TextInputProps extends TextInputPropsInterface {}
interface TextAreaProps extends TextAreaPropsInterface {}

export type { AutosuggestProps, TextAreaProps, TextInputProps, BaseInputProps };

export { TextArea, TextInput, BaseInputField, Autosuggest };
