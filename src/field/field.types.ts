import { Accessor, JSX, ParentProps } from "solid-js";
import { Message, MessageLevel } from "../utils/message";

export type FieldProps = JSX.HTMLAttributes<HTMLDivElement> & {
  error?: string | boolean;
};

export type FieldProviderProps = ParentProps & {
  error: boolean;
};

export type FieldLabelProps = JSX.LabelHTMLAttributes<HTMLLabelElement>;

export type FieldMessageProps = JSX.HTMLAttributes<HTMLParagraphElement> & {
  level?: MessageLevel;
};

export type FieldContextValue = {
  fieldId?: string;
  error: Accessor<boolean>;
  ariaDescribedBy: Accessor<string | undefined>;
  ariaErrorMessage: Accessor<string | undefined>;
  setMessage(message: Message): void;
};
