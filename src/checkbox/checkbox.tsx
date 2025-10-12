import { createUniqueId, splitProps } from "solid-js";
import { CheckboxProps } from "./checkbox.types";
import sx from "./checkbox.module.css";
import { cls } from "../utils/cls";

export const Checkbox = (props: CheckboxProps) => {
  const [local, rest] = splitProps(props, ["label", "error", "class"]);
  const id = createUniqueId();

  return (
    <span class={cls(sx.checkbox, local.class, rest.disabled && sx.disabled)}>
      <input {...rest} id={id} type="checkbox" class={sx.input} aria-invalid={!!local.error} />
      <span class={sx.indicator} />

      {local.label && (
        <label for={id} class={sx.label}>
          {local.label}
        </label>
      )}
    </span>
  );
};
