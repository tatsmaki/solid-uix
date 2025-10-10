import { fn } from "storybook/test";

import { TextInput } from "./text_input";

export default {
  title: "Interactive/TextInput",
  component: TextInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    label: "TextInput",
    placeholder: "Placeholder",
    value: "",
    disabled: false,
    error: "",
    onChange: fn(),
  },
};

export const Default = {
  args: {
    label: "TextInput",
    placeholder: "Placeholder",
    value: "",
    disabled: false,
    error: "",
  },
};

export const Disabled = {
  args: {
    label: "TextInput",
    placeholder: "Placeholder",
    value: "",
    disabled: true,
    error: "",
  },
};

export const Error = {
  args: {
    label: "TextInput",
    placeholder: "Placeholder",
    value: "",
    disabled: false,
    error: "Error",
  },
};
