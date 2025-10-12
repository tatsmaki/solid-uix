import { JSX } from "solid-js";

export type CheckboxProps = JSX.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: boolean;
};
