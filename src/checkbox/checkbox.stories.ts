import { fn } from "storybook/test";

import { Checkbox } from "./checkbox";

export default {
  title: "Interactive/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    label: "Checkbox",
    disabled: false,
    error: "",
    onChange: fn(),
  },
};

export const Default = {
  args: {
    label: "Checkbox",
  },
};

export const Disabled = {
  args: {
    label: "Checkbox",
    disabled: true,
  },
};

export const Error = {
  args: {
    label: "Checkbox",
    error: true,
  },
};
