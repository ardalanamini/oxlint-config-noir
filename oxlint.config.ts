import { defineConfig } from "oxlint";
import { config } from "./dist/index.js";

export default defineConfig({
  extends: [config.recommended],
});
