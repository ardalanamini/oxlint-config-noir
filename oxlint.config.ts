import { defineConfig } from "oxlint";
import { config } from "#src";

export default defineConfig({
  extends: [config.recommended],
});
