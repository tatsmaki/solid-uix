import { LabelProps } from "./label.types";
import sx from "./label.module.css";

export const Label = (props: LabelProps) => {
  return (
    <label class={sx.label} {...props}>
      {props.children}
    </label>
  );
};
