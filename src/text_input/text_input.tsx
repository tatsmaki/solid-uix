import { splitProps } from "solid-js";
import { TextInputProps } from "./text_input.types";
import { cls } from "../utils/cls";
import { useFieldContext } from "../field/field.context";
import sx from "./text_input.module.css";

export const TextInput = (props: TextInputProps) => {
  const [local, rest] = splitProps(props, ["error", "class"]);
  const context = useFieldContext();

  return (
    <input
      {...rest}
      class={cls(sx.input, local.class)}
      id={context.fieldId}
      type="text"
      aria-describedby={context.ariaDescribedBy()}
      aria-invalid={context.error() || !!local.error}
      aria-errormessage={context.ariaErrorMessage()}
    />
  );
};
