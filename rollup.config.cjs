const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const typescript = require("@rollup/plugin-typescript");
const postcss = require("rollup-plugin-postcss");
const dts = require("rollup-plugin-dts").default;
const svgr = require("@svgr/rollup");
const url = require("@rollup/plugin-url");

module.exports = [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.cjs.js",
        format: "cjs",
        sourcemap: false,
      },
      {
        file: "dist/index.esm.js",
        format: "esm",
        sourcemap: false,
      }
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        outDir: "./dist",
        declarationDir: "./dist"
      }),
      postcss(),
      svgr(),
      url()
    ]
  },
  {
    external: [/\.css$/],
    input: "dist/index.esm.js",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];