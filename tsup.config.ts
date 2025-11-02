import { defineConfig, Options } from "tsup";
import { solidPlugin } from "esbuild-plugin-solid";

const config: Options = {
  entry: ["src/main.ts"],
  target: "esnext",
  platform: "browser",
  format: ["esm"],
  clean: true,
  outDir: "dist/",
  treeshake: {
    preset: "smallest",
  },
  replaceNodeEnv: true,
  loader: {
    ".css": "local-css",
    ".svg": "dataurl",
  },
};

export default defineConfig([
  {
    ...config,
    dts: false,
    esbuildOptions(options) {
      options.jsx = "preserve";
      options.chunkNames = "[name]/[hash]";
      options.drop = ["console", "debugger"];
    },
    outExtension() {
      return {
        js: ".jsx",
      };
    },
  },
  {
    ...config,
    dts: true,
    external: [/\.css$/],
    esbuildOptions(options) {
      options.chunkNames = "[name]/[hash]";
      options.drop = ["console", "debugger"];
    },
    esbuildPlugins: [solidPlugin({ solid: { generate: "dom" } })],
  },
]);
