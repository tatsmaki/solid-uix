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
  error: Accessor<boolean>;
  fieldId: string;
  ariaDescribedBy: Accessor<string | undefined>;
  ariaErrorMessage: Accessor<string | undefined>;
  setMessage(message: Message): void;
};
