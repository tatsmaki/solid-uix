import { fn } from "storybook/test";

import { Button } from "./button";

export default {
  title: "Interactive/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["solid", "outlined"],
    },
  },
  args: {
    children: "Button",
    variant: "solid",
    disabled: false,
    onClick: fn(),
  },
};

export const Default = {
  args: {},
};

export const Outlined = {
  args: {
    variant: "outlined",
  },
};

export const Disabled = {
  args: {
    disabled: true,
  },
};
