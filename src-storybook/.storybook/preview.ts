import type { Preview } from "@kachurun/storybook-solid-vite";
import "../../src/main.css";

export const tags = ["autodocs"];

const preview: Preview = {
  parameters: {
    // automatically create action args for all props that start with "on"
    actions: { argTypesRegex: "^on.*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      codePanel: true,
    },

    backgrounds: {
      options: {
        dark: { name: "Dark", value: "#0a0b11" },
      },
    },
    initialGlobals: {
      backgrounds: { value: "dark" },
    },
  },
};

export default preview;
