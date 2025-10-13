import { ButtonProps } from "./button.types";
import sx from "./button.module.css";
import { splitProps } from "solid-js";
import { cls } from "../utils/cls";

export const Button = (props: ButtonProps) => {
  const [local, rest] = splitProps(props, ["variant"]);

  return (
    <button type="button" {...rest} class={cls(sx.button, rest.class, local.variant || "solid")}>
      {props.children}
    </button>
  );
};
