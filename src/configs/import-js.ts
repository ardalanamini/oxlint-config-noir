import { defineConfig } from "oxlint";
import { base } from "./base.js";

export const importJS = defineConfig({
  extends  : [base],
  jsPlugins: [
    {
      name     : "import-js",
      specifier: "eslint-plugin-import",
    },
  ],
  rules: {
    "import-js/order": [
      "error",
      {
        groups     : ["type", "builtin", "external", "internal", "unknown", "sibling", "index", "parent", "object"],
        alphabetize: {
          order          : "asc",
          orderImportKind: "asc",
          caseInsensitive: false,
        },
        named: {
          enabled: true,
          types  : "types-first",
        },
      },
    ],
  },
});
