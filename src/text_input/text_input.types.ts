import { JSX } from "solid-js";

export type TextInputProps = JSX.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};
