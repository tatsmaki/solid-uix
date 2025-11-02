import { cls } from "../utils/cls";
import { LinkProps } from "./link.types";
import sx from "./link.module.css";
import { splitProps } from "solid-js";

export const Link = (props: LinkProps) => {
  const [local, rest] = splitProps(props, ["class", "reset", "disabled", "color", "underline"]);

  return (
    <a
      {...rest}
      class={cls(
        !local.reset && sx.link,
        local.class,
        local.disabled && sx.disabled,
        local.color === "secondary" && sx.secondary,
        local.underline === "always" && sx.underline
      )}
      aria-disabled={local.disabled}
    >
      {rest.children}
    </a>
  );
};
