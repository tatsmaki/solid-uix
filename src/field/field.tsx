import { createUniqueId, Show, splitProps } from "solid-js";
import { FieldLabelProps, FieldMessageProps, FieldProps } from "./field.types";
import { FieldProvider, useFieldContext } from "./field.context";
import { cls } from "../utils/cls";
import sx from "./field.module.css";

export const Field = (props: FieldProps) => {
  const [local, rest] = splitProps(props, ["class", "error"]);

  return (
    <FieldProvider error={!!local.error}>
      <div {...rest} class={cls(sx.field, local.class)}>
        {props.children}
      </div>
    </FieldProvider>
  );
};

const FieldLabel = (props: FieldLabelProps) => {
  const [local, rest] = splitProps(props, ["class"]);
  const context = useFieldContext();

  return (
    <label {...rest} for={context.fieldId} class={cls(sx.label, local.class)}>
      {rest.children}
    </label>
  );
};

const FieldMessage = (props: FieldMessageProps) => {
  const [local, rest] = splitProps(props, ["class", "level"]);
  const context = useFieldContext();
  const messageId = createUniqueId();

  context.setMessage({ level: local.level || "info", id: messageId });

  return (
    <Show when={rest.children}>
      <p
        {...rest}
        id={messageId}
        class={cls(sx.message, local.class, local.level === "error" && sx.error)}
      >
        {rest.children}
      </p>
    </Show>
  );
};

Field.Label = FieldLabel;

Field.Message = FieldMessage;
