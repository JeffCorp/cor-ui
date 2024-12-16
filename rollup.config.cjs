const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const typescript = require("@rollup/plugin-typescript");
const postcss = require("rollup-plugin-postcss");
const dts = require("rollup-plugin-dts").default;
const svgr = require("@svgr/rollup");
const url = require("@rollup/plugin-url");
const copy = require('rollup-plugin-copy');
const {customCssResolver} = require('./cssResolver.cjs');

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
      postcss({
        extensions: ['.css'],
        extract: true,
        minimize: true,
        modules: false,
        extract: 'styles.css'
      }),
      // copy({
      //   targets: [
      //     { 
      //       src: 'src/components/Fonts/fonts/*',
      //       dest: 'dist/assets/fonts'
      //     },
      //     {
      //       src: 'src/components/Fonts/Fonts.css',
      //       dest: 'dist/styles',
      //       transform: (contents) => 
      //         contents
      //           .toString()
      //           .replace(
      //             /url\(['"]?\.\/fonts\//g, 
      //             'url(\'../assets/fonts/'
      //           )
      //     }
      //   ],
      //   hook: 'writeBundle'
      // }),
      svgr(),
      url(),
      customCssResolver()
    ]
  },
  {
    external: [/\.css$/],
    input: "dist/index.esm.js",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];