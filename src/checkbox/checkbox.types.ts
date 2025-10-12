import { JSX } from "solid-js";

export type CheckboxProps = JSX.LabelHTMLAttributes<HTMLInputElement> & {
  disabled?: boolean;
  label?: string;
  error?: boolean;
};
