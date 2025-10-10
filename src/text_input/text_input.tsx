import { createUniqueId, splitProps } from "solid-js";
import { TextInputProps } from "./text_input.types";
import sx from "./text_input.module.css";
import { Label } from "../label/label";
import { cls } from "../utils/cls";
import { isString } from "../utils/string";

export const TextInput = (props: TextInputProps) => {
  const id = createUniqueId();
  const [local, rest] = splitProps(props, ["label", "error", "class"]);

  return (
    <span class={sx.field}>
      <Label for={id}>{local.label}</Label>
      <input
        id={id}
        type="text"
        {...rest}
        data-error={!!local.error}
        class={cls(sx.input, local.class)}
      />
      {isString(local.error) && !!local.error && <p class={sx.error}>{local.error}</p>}
    </span>
  );
};
