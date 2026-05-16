import { defineConfig } from "oxlint";
import { base } from "./base.js";
import { exports } from "./exports.js";
import { importJS } from "./import-js.js";
import { stylistic } from "./stylistic.js";

export const recommended = defineConfig({
  extends: [base, stylistic, exports, importJS],
});
