import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import { dts } from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";

export default defineConfig([
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.cjs",
        format: "cjs",
        exports: "default",
        generatedCode: {
          constBindings: true,
        },

        // https://nodejs.org/api/esm.html#esm_commonjs_namespaces
        interop: "default",
      },
      {
        file: "dist/index.js",
        format: "esm",
        exports: "default",
        generatedCode: {
          constBindings: true,
        },

        // https://nodejs.org/api/esm.html#esm_commonjs_namespaces
        interop: "default",
      },
    ],
    external: () => true,
    plugins: [typescript(), terser()],
  },
  {
    input: "./src/index.ts",
    output: {
      file: "./dist/index.d.ts",
    },
    external: () => true,
    plugins: [dts()],
  },
]);
