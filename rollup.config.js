/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";
import replace from "@rollup/plugin-replace";
import copy from 'rollup-plugin-copy';

import STORE_MOCK from "./src/mocks/firefox-mock";

const production = !process.env.ROLLUP_WATCH;

function serve() {
  let server;

  function toExit() {
    if (server) server.kill(0);
  }

  return {
    writeBundle() {
      if (server) return;
      server = require("child_process").spawn(
        "npm",
        ["run", "start", "--", "--dev"],
        {
          stdio: ["ignore", "inherit", "inherit"],
          shell: true,
        }
      );

      process.on("SIGTERM", toExit);
      process.on("exit", toExit);
    },
  };
}

export default {
  input: "src/main.js",
  output: {
    sourcemap: true,
    format: "iife",
    name: "app",
    file: "public/build/bundle.js",
  },
  plugins: [
    replace({
      __STORE_IMPLEMENTATION__: JSON.stringify(STORE_MOCK),
      __API_ENDPOINT__: production ? "web-extension" : "web",
    }),
    copy({
      targets: [
        { src: 'node_modules/@mozilla-protocol/core/protocol/fonts/Inter-Bold.woff2', dest: 'public/fonts/'},
        { src: 'node_modules/@mozilla-protocol/core/protocol/fonts/Inter-Regular.woff2', dest: 'public/fonts/'},
        { src: 'node_modules/@mozilla-protocol/core/protocol/fonts/Inter-Italic.woff2', dest: 'public/fonts/'},
        { src: 'node_modules/@mozilla-protocol/core/protocol/fonts/ZillaSlab-Bold.woff2', dest: 'public/fonts/'},
        { src: 'node_modules/@mozilla-protocol/core/protocol/fonts/Metropolis-*.woff2', dest: 'public/fonts/'},
        { src: 'node_modules/@mozilla-protocol/core/protocol/css/protocol.css', dest: 'public/build/'},
        { src: 'node_modules/@mozilla-protocol/core/protocol/css/protocol-extra.css', dest: 'public/build/'}
      ]
    }),
    svelte({
      // enable run-time checks when not in production
      dev: !production,
      // we'll extract any component CSS out into
      // a separate file - better for performance
      css: (css) => {
        css.write("bundle.css");
      },
    }),

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration -
    // consult the documentation for details:
    // https://github.com/rollup/plugins/tree/master/packages/commonjs
    resolve({
      browser: true,
      dedupe: ["svelte"],
    }),
    commonjs(),

    // In dev mode, call `npm run start` once
    // the bundle has been generated
    !production && serve(),

    // Watch the `public` directory and refresh the
    // browser on changes when not in production
    !production && livereload("public"),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser(),
  ],
  watch: {
    clearScreen: false,
  },
};
