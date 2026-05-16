import { defineConfig } from "oxlint";
import { base } from "./base.js";

export const exports = defineConfig({
  extends  : [base],
  jsPlugins: ["eslint-plugin-perfectionist"],
  rules    : {
    "perfectionist/sort-exports": [
      "error",
      {
        type        : "alphabetical",
        order       : "asc",
        fallbackSort: {
          type : "natural",
          order: "asc",
        },
        ignoreCase        : false,
        partitionByComment: true,
        groups            : ["type-export", "value-export"],
      },
    ],
  },
});
