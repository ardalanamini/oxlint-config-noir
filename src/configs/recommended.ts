import { defineConfig } from "oxlint";
import { native } from "#config/native";

export const recommended = defineConfig({
  extends  : [native],
  jsPlugins: [
    "@stylistic/eslint-plugin",
    "eslint-plugin-perfectionist",
    {
      name     : "js-plugin-import",
      specifier: "eslint-plugin-import",
    },
    {
      name     : "js-plugin-unicorn",
      specifier: "eslint-plugin-unicorn",
    },

    // {
    //   name     : "js-plugin-typescript",
    //   specifier: "typescript-eslint",
    // },
  ],
  rules: {
    "@stylistic/array-bracket-spacing": "error",
    "@stylistic/arrow-parens"         : [
      "error",
      "as-needed",
      {
        requireForBlockBody: true,
      },
    ],
    "@stylistic/arrow-spacing": "error",
    "@stylistic/block-spacing": "error",
    "@stylistic/brace-style"  : [
      "error",
      "1tbs",
    ],
    "@stylistic/comma-dangle": [
      "error",
      "always-multiline",
    ],
    "@stylistic/comma-spacing": [
      "error",
      {
        before: false,
        after : true,
      },
    ],
    "@stylistic/comma-style": [
      "error",
      "last",
    ],
    "@stylistic/computed-property-spacing": [
      "error",
      "never",
      {
        enforceForClassMembers: true,
      },
    ],
    "@stylistic/dot-location": [
      "error",
      "property",
    ],
    "@stylistic/eol-last": [
      "error",
      "always",
    ],
    "@stylistic/generator-star-spacing": [
      "error",
      {
        before: true,
        after : false,
      },
    ],
    "@stylistic/indent": [
      "error",
      2,
      {
        SwitchCase         : 1,
        VariableDeclarator : "first",
        MemberExpression   : 1,
        FunctionDeclaration: {
          parameters: "first",
        },
        FunctionExpression: {
          parameters: "first",
        },
        StaticBlock: {
          body: 1,
        },
        CallExpression: {
          arguments: "first",
        },
        ArrayExpression         : "first",
        ObjectExpression        : "first",
        ImportDeclaration       : "first",
        flatTernaryExpressions  : false,
        offsetTernaryExpressions: true,
      },
    ],
    "@stylistic/indent-binary-ops": [
      "error",
      2,
    ],
    "@stylistic/key-spacing": [
      "error",
      {
        beforeColon: false,
        afterColon : true,
        align      : {
          beforeColon: false,
          afterColon : true,
          on         : "colon",
          mode       : "strict",
        },
      },
    ],
    "@stylistic/keyword-spacing": [
      "error",
      {
        before: true,
        after : true,
      },
    ],
    "@stylistic/lines-between-class-members": [
      "error",
      "always",
    ],
    "@stylistic/max-statements-per-line": [
      "error",
      {
        max: 1,
      },
    ],
    "@stylistic/member-delimiter-style": [
      "error",
      {
        multiline: {
          delimiter  : "semi",
          requireLast: true,
        },
        singleline: {
          delimiter  : "semi",
          requireLast: true,
        },
        multilineDetection: "brackets",
      },
    ],
    "@stylistic/multiline-ternary": [
      "error",
      "always-multiline",
    ],
    "@stylistic/new-parens": [
      "error",
      "always",
    ],
    "@stylistic/no-extra-parens"         : "error",
    "@stylistic/no-floating-decimal"     : "error",
    "@stylistic/no-mixed-operators"      : "error",
    "@stylistic/no-mixed-spaces-and-tabs": "error",
    "@stylistic/no-multi-spaces"         : "error",
    "@stylistic/no-multiple-empty-lines" : [
      "error",
      {
        max   : 1,
        maxEOF: 0,
        maxBOF: 0,
      },
    ],
    "@stylistic/no-tabs"                      : "error",
    "@stylistic/no-trailing-spaces"           : "error",
    "@stylistic/no-whitespace-before-property": "error",
    "@stylistic/object-curly-spacing"         : [
      "error",
      "always",
      {
        arraysInObjects : true,
        objectsInObjects: true,
      },
    ],
    "@stylistic/operator-linebreak": [
      "error",
      "before",
    ],
    "@stylistic/padded-blocks": [
      "error",
      {
        blocks  : "never",
        classes : "always",
        switches: "never",
      },
    ],
    "@stylistic/quote-props": [
      "error",
      "consistent-as-needed",
    ],
    "@stylistic/quotes": [
      "error",
      "double",
      {
        avoidEscape          : true,
        allowTemplateLiterals: "avoidEscape",
      },
    ],
    "@stylistic/rest-spread-spacing": [
      "error",
      "never",
    ],
    "@stylistic/semi": [
      "error",
      "always",
    ],
    "@stylistic/semi-spacing": [
      "error",
      {
        before: false,
        after : true,
      },
    ],
    "@stylistic/space-before-blocks"        : "error",
    "@stylistic/space-before-function-paren": [
      "error",
      {
        anonymous : "always",
        named     : "never",
        asyncArrow: "always",
      },
    ],
    "@stylistic/space-in-parens": [
      "error",
      "never",
    ],
    "@stylistic/space-infix-ops": "error",
    "@stylistic/space-unary-ops": "error",
    "@stylistic/spaced-comment" : [
      "error",
      "always",
    ],
    "@stylistic/template-curly-spacing": [
      "error",
      "always",
    ],
    "@stylistic/template-tag-spacing"   : "error",
    "@stylistic/type-annotation-spacing": [
      "error",
      {
        before   : false,
        after    : true,
        overrides: {
          arrow: "ignore",
        },
      },
    ],
    "@stylistic/type-generic-spacing"    : "error",
    "@stylistic/type-named-tuple-spacing": "error",
    "@stylistic/wrap-iife"               : [
      "error",
      "inside",
      {
        functionPrototypeMethods: true,
      },
    ],
    "@stylistic/yield-star-spacing": [
      "error",
      "before",
    ],
    "@stylistic/jsx-closing-bracket-location": [
      "error",
      "tag-aligned",
    ],
    "@stylistic/jsx-closing-tag-location": [
      "error",
      "tag-aligned",
    ],
    "@stylistic/jsx-curly-newline": [
      "error",
      "consistent",
    ],
    "@stylistic/jsx-curly-spacing": [
      "error",
      {
        when      : "never",
        attributes: {
          allowMultiline: false,
        },
        children: true,
      },
    ],
    "@stylistic/jsx-equals-spacing": [
      "error",
      "never",
    ],
    "@stylistic/jsx-first-prop-new-line": [
      "error",
      "multiline",
    ],
    "@stylistic/jsx-function-call-newline": [
      "error",
      "multiline",
    ],
    "@stylistic/jsx-indent-props": [
      "error",
      2,
    ],
    "@stylistic/jsx-max-props-per-line": [
      "error",
      {
        when   : "multiline",
        maximum: 1,
      },
    ],
    "@stylistic/jsx-one-expression-per-line": [
      "error",
      {
        allow: "non-jsx",
      },
    ],
    "@stylistic/jsx-quotes": [
      "error",
      "prefer-double",
    ],
    "@stylistic/jsx-tag-spacing": [
      "error",
      {
        closingSlash     : "never",
        beforeSelfClosing: "always",
        afterOpening     : "never",
        beforeClosing    : "proportional-always",
      },
    ],
    "@stylistic/jsx-wrap-multilines": [
      "error",
      {
        declaration  : "parens-new-line",
        assignment   : "parens-new-line",
        return       : "parens-new-line",
        arrow        : "parens-new-line",
        condition    : "parens-new-line",
        logical      : "parens-new-line",
        prop         : "parens-new-line",
        propertyValue: "parens-new-line",
      },
    ],
    "@stylistic/array-bracket-newline": [
      "error",
      {
        multiline: true,
      },
    ],
    "@stylistic/array-element-newline": [
      "error",
      "consistent",
    ],
    "@stylistic/function-call-argument-newline": [
      "error",
      "consistent",
    ],
    "@stylistic/function-call-spacing": [
      "error",
      "never",
    ],
    "@stylistic/function-paren-newline": [
      "error",
      "multiline",
    ],
    "@stylistic/implicit-arrow-linebreak": [
      "error",
      "beside",
    ],
    "@stylistic/jsx-newline": [
      "error",
      {
        prevent        : true,
        allowMultilines: true,
      },
    ],
    "@stylistic/line-comment-position": [
      "error",
      {
        position: "above",
      },
    ],
    "@stylistic/linebreak-style": [
      "error",
      "unix",
    ],
    "@stylistic/lines-around-comment": [
      "error",
      {
        beforeBlockComment  : true,
        beforeLineComment   : true,
        afterHashbangComment: true,
        allowBlockStart     : true,
        allowClassStart     : true,
        allowObjectStart    : true,
        allowArrayStart     : true,
      },
    ],
    "@stylistic/max-len": [
      "error",
      {
        code                  : 120,
        tabWidth              : 2,
        comments              : 120,
        ignoreUrls            : true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals  : true,
      },
    ],
    "@stylistic/newline-per-chained-call": [
      "error",
      {
        ignoreChainWithDepth: 2,
      },
    ],
    "@stylistic/no-confusing-arrow"              : "error",
    "@stylistic/no-extra-semi"                   : "error",
    "@stylistic/nonblock-statement-body-position": [
      "error",
      "beside",
    ],
    "@stylistic/object-curly-newline": [
      "error",
      {
        multiline : true,
        consistent: true,
      },
    ],
    "@stylistic/object-property-newline"     : "error",
    "@stylistic/one-var-declaration-per-line": [
      "error",
      "initializations",
    ],
    "@stylistic/semi-style": [
      "error",
      "last",
    ],
    "@stylistic/switch-colon-spacing": "error",
    "perfectionist/sort-exports"     : [
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
        groups            : [
          "type-export",
          "value-export",
        ],
      },
    ],
    "js-plugin-import/order": [
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
    "js-plugin-unicorn/consistent-destructuring" : "error",
    "js-plugin-unicorn/consistent-json-file-read": ["error", "buffer"],
    "js-plugin-unicorn/name-replacements"        : "error",
    "js-plugin-unicorn/prefer-switch"            : "error",

    // "js-plugin-typescript/member-ordering"      : [
    //   "error",
    //   {
    //     default: {
    //       memberTypes: [
    //         // Index signature
    //         "signature",
    //         "call-signature",

    //         // Fields
    //         "public-static-field",
    //         "protected-static-field",
    //         "private-static-field",
    //         "#private-static-field",

    //         "public-decorated-field",
    //         "protected-decorated-field",
    //         "private-decorated-field",

    //         "public-instance-field",
    //         "protected-instance-field",
    //         "private-instance-field",
    //         "#private-instance-field",

    //         "public-abstract-field",
    //         "protected-abstract-field",

    //         "public-field",
    //         "protected-field",
    //         "private-field",
    //         "#private-field",

    //         "static-field",
    //         "instance-field",
    //         "abstract-field",

    //         "decorated-field",

    //         "field",

    //         // Static initialization
    //         "static-initialization",

    //         // Constructors
    //         "public-constructor",
    //         "protected-constructor",
    //         "private-constructor",

    //         "constructor",

    //         // Accessors
    //         "public-static-accessor",
    //         "protected-static-accessor",
    //         "private-static-accessor",
    //         "#private-static-accessor",

    //         "public-decorated-accessor",
    //         "protected-decorated-accessor",
    //         "private-decorated-accessor",

    //         "public-instance-accessor",
    //         "protected-instance-accessor",
    //         "private-instance-accessor",
    //         "#private-instance-accessor",

    //         "public-abstract-accessor",
    //         "protected-abstract-accessor",

    //         "public-accessor",
    //         "protected-accessor",
    //         "private-accessor",
    //         "#private-accessor",

    //         "static-accessor",
    //         "instance-accessor",
    //         "abstract-accessor",

    //         "decorated-accessor",

    //         "accessor",

    //         // Getters
    //         "public-static-get",
    //         "protected-static-get",
    //         "private-static-get",
    //         "#private-static-get",

    //         "public-decorated-get",
    //         "protected-decorated-get",
    //         "private-decorated-get",

    //         "public-instance-get",
    //         "protected-instance-get",
    //         "private-instance-get",
    //         "#private-instance-get",

    //         "public-abstract-get",
    //         "protected-abstract-get",

    //         "public-get",
    //         "protected-get",
    //         "private-get",
    //         "#private-get",

    //         "static-get",
    //         "instance-get",
    //         "abstract-get",

    //         "decorated-get",

    //         "get",

    //         // Setters
    //         "public-static-set",
    //         "protected-static-set",
    //         "private-static-set",
    //         "#private-static-set",

    //         "public-decorated-set",
    //         "protected-decorated-set",
    //         "private-decorated-set",

    //         "public-instance-set",
    //         "protected-instance-set",
    //         "private-instance-set",
    //         "#private-instance-set",

    //         "public-abstract-set",
    //         "protected-abstract-set",

    //         "public-set",
    //         "protected-set",
    //         "private-set",
    //         "#private-set",

    //         "static-set",
    //         "instance-set",
    //         "abstract-set",

    //         "decorated-set",

    //         "set",

    //         // Methods
    //         "public-static-method",
    //         "protected-static-method",
    //         "private-static-method",
    //         "#private-static-method",

    //         "public-decorated-method",
    //         "protected-decorated-method",
    //         "private-decorated-method",

    //         "public-instance-method",
    //         "protected-instance-method",
    //         "private-instance-method",
    //         "#private-instance-method",

    //         "public-abstract-method",
    //         "protected-abstract-method",

    //         "public-method",
    //         "protected-method",
    //         "private-method",
    //         "#private-method",

    //         "static-method",
    //         "instance-method",
    //         "abstract-method",

    //         "decorated-method",

    //         "method",
    //       ],
    //       order: "alphabetically",
    //     },
    //   },
    // ],
    // "js-plugin-typescript/naming-convention"     : [
    //   "error",
    //   {
    //     selector: "variable",
    //     format  : ["camelCase", "UPPER_CASE"],
    //   },
    // ],
    // "js-plugin-typescript/no-unused-private-class-members": "error",
  },
});
