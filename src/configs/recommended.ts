import { defineConfig } from "oxlint";
import { base } from "./base.ts";
import { exports } from "./exports.ts";
import { importJS } from "./import-js.ts";
import { stylistic } from "./stylistic.ts";

export const recommended = defineConfig({
  extends: [base, stylistic, exports, importJS],
});
