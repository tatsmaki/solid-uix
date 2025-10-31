import { JSX } from "solid-js";

export type LinkProps = JSX.AnchorHTMLAttributes<HTMLAnchorElement> & {
  disabled?: boolean;
  color?: "accent" | "secondary";
  underline?: "hover" | "always";
};
