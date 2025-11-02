import { fn } from "storybook/test";

import { Link } from "./link";
// import { buttonSx } from "../button/button";
// import { cls } from "../utils/cls";

export default {
  title: "Interactive/Link",
  component: Link,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: {
        type: "select",
      },
      options: ["accent", "secondary"],
    },
    underline: {
      control: {
        type: "select",
      },
      options: ["hover", "always"],
    },
  },
  args: {
    children: "Link",
    color: "accent",
    underline: "hover",
    disabled: false,
    onClick: fn(),
  },
};

export const Default = {
  args: {},
};

export const Underline = {
  args: {
    underline: "always",
  },
};

export const Secondary = {
  args: {
    color: "secondary",
  },
};

// export const Button = {
//   args: {
//     class: cls(buttonSx.button, buttonSx.link, buttonSx.solid),
//   },
// };

// export const ButtonSecondary = {
//   args: {
//     class: cls(buttonSx.button, buttonSx.link, buttonSx.outlined),
//   },
// };

export const Disabled = {
  args: {
    disabled: true,
  },
};
