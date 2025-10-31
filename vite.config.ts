import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import dts from "vite-plugin-dts";

const ssr = process.env.BUILD_TARGET === "ssr";

export default defineConfig({
  plugins: [
    solid({ ssr, solid: { generate: ssr ? "ssr" : "dom" } }),
    ssr
      ? null
      : dts({
          tsconfigPath: "tsconfig.build.json",
          outDir: "dist/types",
        }),
  ],
  build: {
    ssr,
    target: "esnext",
    sourcemap: true,
    cssCodeSplit: false,
    outDir: ssr ? "dist/ssr" : "dist",
    lib: {
      entry: "src/main.ts",
      name: "solid-uix",
      fileName: "main",
      formats: ["es"],
      cssFileName: "main",
    },
    rollupOptions: {
      external: ["solid-js", "solid-js/web"],
      output: {
        exports: "named",
        // globals: {
        //   "solid-js": "solid",
        //   "solid-js/web": "solid-js/web",
        // },
      },
    },
  },
  // resolve: {
  //   conditions: ssr ? ["node"] : ["browser", "development"],
  // },
  // ssr: {
  //   external: ["solid-js", "solid-js/web"],
  // },
});
