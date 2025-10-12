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
