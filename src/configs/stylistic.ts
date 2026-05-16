import { defineConfig } from "oxlint";
import { base } from "./base.js";

export const stylistic = defineConfig({
  extends  : [base],
  jsPlugins: ["@stylistic/eslint-plugin"],
  rules    : {
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
    "@stylistic/brace-style"  : ["error", "1tbs"],
    "@stylistic/comma-dangle" : ["error", "always-multiline"],
    "@stylistic/comma-spacing": [
      "error",
      {
        before: false,
        after : true,
      },
    ],
    "@stylistic/comma-style"              : ["error", "last"],
    "@stylistic/computed-property-spacing": [
      "error",
      "never",
      {
        enforceForClassMembers: true,
      },
    ],
    "@stylistic/dot-location"          : ["error", "property"],
    "@stylistic/eol-last"              : ["error", "always"],
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
    "@stylistic/indent-binary-ops": ["error", 2],
    "@stylistic/key-spacing"      : [
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
    "@stylistic/lines-between-class-members": ["error", "always"],
    "@stylistic/max-statements-per-line"    : [
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
    "@stylistic/multiline-ternary"       : ["error", "always-multiline"],
    "@stylistic/new-parens"              : ["error", "always"],
    "@stylistic/no-extra-parens"         : "error",
    "@stylistic/no-floating-decimal"     : "error",
    "@stylistic/no-mixed-operators"      : "error",
    "@stylistic/no-mixed-spaces-and-tabs": "error",
    "@stylistic/no-multi-spaces"         : "error",
    "@stylistic/no-multiple-empty-lines" : [
      "error",
      {
        max   : 2,
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
    "@stylistic/operator-linebreak": ["error", "before"],
    "@stylistic/padded-blocks"     : [
      "error",
      {
        blocks  : "never",
        classes : "always",
        switches: "never",
      },
    ],
    "@stylistic/quote-props": ["error", "consistent-as-needed"],
    "@stylistic/quotes"     : [
      "error",
      "double",
      {
        avoidEscape          : true,
        allowTemplateLiterals: "avoidEscape",
      },
    ],
    "@stylistic/rest-spread-spacing": ["error", "never"],
    "@stylistic/semi"               : ["error", "always"],
    "@stylistic/semi-spacing"       : [
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
    "@stylistic/space-in-parens"        : ["error", "never"],
    "@stylistic/space-infix-ops"        : "error",
    "@stylistic/space-unary-ops"        : "error",
    "@stylistic/spaced-comment"         : ["error", "always"],
    "@stylistic/template-curly-spacing" : ["error", "always"],
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
    "@stylistic/yield-star-spacing"          : ["error", "before"],
    "@stylistic/jsx-closing-bracket-location": ["error", "tag-aligned"],
    "@stylistic/jsx-closing-tag-location"    : ["error", "tag-aligned"],
    "@stylistic/jsx-curly-brace-presence"    : [
      "error",
      {
        propElementValues: "always",
      },
    ],
    "@stylistic/jsx-curly-newline": ["error", "consistent"],
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
    "@stylistic/jsx-equals-spacing"       : ["error", "never"],
    "@stylistic/jsx-first-prop-new-line"  : ["error", "multiline"],
    "@stylistic/jsx-function-call-newline": ["error", "multiline"],
    "@stylistic/jsx-indent-props"         : ["error", 2],
    "@stylistic/jsx-max-props-per-line"   : [
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
    "@stylistic/jsx-quotes"     : ["error", "prefer-double"],
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
    "@stylistic/array-element-newline"         : ["error", "consistent"],
    "@stylistic/function-call-argument-newline": ["error", "consistent"],
    "@stylistic/function-call-spacing"         : ["error", "never"],
    "@stylistic/function-paren-newline"        : ["error", "multiline"],
    "@stylistic/implicit-arrow-linebreak"      : ["error", "beside"],
    "@stylistic/jsx-newline"                   : [
      "error",
      {
        prevent        : true,
        allowMultilines: true,
      },
    ],
    "@stylistic/jsx-pascal-case"      : "error",
    "@stylistic/jsx-self-closing-comp": [
      "error",
      {
        component: true,
        html     : true,
      },
    ],
    "@stylistic/line-comment-position": [
      "error",
      {
        position: "above",
      },
    ],
    "@stylistic/linebreak-style"     : ["error", "unix"],
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
    "@stylistic/nonblock-statement-body-position": ["error", "beside"],
    "@stylistic/object-curly-newline"            : [
      "error",
      {
        multiline : true,
        consistent: true,
      },
    ],
    "@stylistic/object-property-newline"     : "error",
    "@stylistic/one-var-declaration-per-line": ["error", "initializations"],
    "@stylistic/semi-style"                  : ["error", "last"],
    "@stylistic/switch-colon-spacing"        : "error",
  },
});
