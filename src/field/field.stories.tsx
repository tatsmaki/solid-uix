import { Field } from "./field";
import { TextInput } from "../text_input/text_input";

type StoryArg = {
  label: string;
  message: string;
  disabled: boolean;
  error: string;
};

export default {
  title: "Feedback/Field",
  component: Field,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    label: "Label",
    message: "Message",
    disabled: false,
    error: "",
  },
  render: (arg: StoryArg) => (
    <Field error={arg.error}>
      <Field.Label>{arg.label}</Field.Label>
      <TextInput disabled={arg.disabled} />
      <Field.Message>{arg.message}</Field.Message>
      {arg.error && <Field.Message level="error">{arg.error}</Field.Message>}
    </Field>
  ),
};

export const Default = {
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
            <Field>
                <Field.Label>Label</Field.Label>
                <TextInput />
                <Field.Message>Message</Field.Message>
            </Field>`,
      },
    },
  },
};

export const Disabled = {
  args: {
    disabled: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
            <Field>
                <Field.Label>Label</Field.Label>
                <TextInput disabled />
                <Field.Message>Message</Field.Message>
            </Field>`,
      },
    },
  },
};

export const Error = {
  args: {
    message: "Message",
    error: "Error Message",
  },
  parameters: {
    docs: {
      source: {
        code: `
            <Field error>
                <Field.Label>Label</Field.Label>
                <TextInput />
                <Field.Message>Message</Field.Message>
                <Field.Message level="error">Error Message</Field.Message>
            </Field>`,
      },
    },
  },
};
