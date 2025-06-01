import { ButtonProps } from "./button.types";
import sx from "./button.module.css";

export const Button = (props: ButtonProps) => {
  return (
    <button type="button" {...props} class={sx.button}>
      {props.children}
    </button>
  );
};
