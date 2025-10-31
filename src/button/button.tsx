import { ButtonProps } from "./button.types";
import { mergeProps, splitProps } from "solid-js";
import { cls } from "../utils/cls";
import sx from "./button.module.css";

const defaultProps = {
  variant: "solid",
};

export const Button = (props: ButtonProps) => {
  const merged = mergeProps(defaultProps, props);
  const [local, rest] = splitProps(merged, ["class", "variant"]);

  return (
    <button
      type="button"
      {...rest}
      class={cls(
        sx.button,
        local.class,
        local.variant === "solid" && sx.solid,
        local.variant === "outlined" && sx.outlined
      )}
    >
      {rest.children}
    </button>
  );
};

export { sx as buttonSx };
