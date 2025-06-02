import { fn } from "storybook/test";

import { Label } from "./label";

export default {
  title: "Example/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    children: "Label",
    onClick: fn(),
  },
};

export const Default = {
  args: {
    children: "Label",
  },
};
