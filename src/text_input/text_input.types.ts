import { JSX } from "solid-js";

export type TextInputProps = JSX.InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean;
};
