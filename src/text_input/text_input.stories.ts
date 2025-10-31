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
    placeholder: "Placeholder",
    value: "",
    disabled: false,
    error: false,
    onChange: fn(),
  },
};

export const Default = {
  args: {},
};

export const Disabled = {
  args: {
    disabled: true,
  },
};

export const Error = {
  args: {
    error: true,
  },
};
