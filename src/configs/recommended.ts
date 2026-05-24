import { defineConfig } from "oxlint";

export const recommended = defineConfig({
  plugins: [
    "typescript",
    "import",
    "unicorn",
  ],
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
  categories: {
    correctness: "off",
  },
  options: {
    reportUnusedDisableDirectives: "error",
    typeAware                    : true,
  },
  env: {
    builtin: true,
    es2026 : true,
    node   : true,
  },
  rules: {
    "constructor-super"            : "error",
    "for-direction"                : "error",
    "getter-return"                : "error",
    "no-async-promise-executor"    : "error",
    "no-case-declarations"         : "error",
    "no-class-assign"              : "error",
    "no-compare-neg-zero"          : "error",
    "no-cond-assign"               : "error",
    "no-const-assign"              : "error",
    "no-constant-binary-expression": "error",
    "no-constant-condition"        : "error",
    "no-control-regex"             : "error",
    "no-debugger"                  : "error",
    "no-delete-var"                : "error",
    "no-dupe-class-members"        : "error",
    "no-dupe-else-if"              : "error",
    "no-dupe-keys"                 : "error",
    "no-duplicate-case"            : "error",
    "no-empty"                     : "error",
    "no-empty-character-class"     : "error",
    "no-empty-pattern"             : "error",
    "no-empty-static-block"        : "error",
    "no-ex-assign"                 : "error",
    "no-extra-boolean-cast"        : "error",
    "no-fallthrough"               : [
      "error",
      {
        allowEmptyCase                : true,
        commentPattern                : String.raw`falls?\s?through`,
        reportUnusedFallthroughComment: true,
      },
    ],
    "no-func-assign"               : "error",
    "no-global-assign"             : "error",
    "no-import-assign"             : "error",
    "no-invalid-regexp"            : "error",
    "no-irregular-whitespace"      : "error",
    "no-loss-of-precision"         : "error",
    "no-misleading-character-class": "error",
    "no-new-native-nonconstructor" : "error",
    "no-nonoctal-decimal-escape"   : "error",
    "no-obj-calls"                 : "error",
    "no-prototype-builtins"        : "error",
    "no-redeclare"                 : "error",
    "no-regex-spaces"              : "error",
    "no-self-assign"               : "error",
    "no-setter-return"             : "error",
    "no-shadow-restricted-names"   : "error",
    "no-sparse-arrays"             : "error",
    "no-this-before-super"         : "error",
    "no-unassigned-vars"           : "error",
    "no-undef"                     : "error",
    "no-unexpected-multiline"      : "error",
    "no-unreachable"               : "error",
    "no-unsafe-finally"            : "error",
    "no-unsafe-negation"           : "error",
    "no-unsafe-optional-chaining"  : "error",
    "no-unused-labels"             : "error",
    "no-unused-vars"               : "error",
    "no-useless-assignment"        : "error",
    "no-useless-backreference"     : "error",
    "no-useless-catch"             : "error",
    "no-useless-escape"            : "error",
    "no-with"                      : "error",
    "preserve-caught-error"        : "error",
    "require-yield"                : "error",
    "use-isnan"                    : "error",
    "valid-typeof"                 : "error",
    "array-callback-return"        : [
      "error",
      {
        allowVoid: true,
      },
    ],
    "no-await-in-loop"     : "error",
    "no-constructor-return": "error",
    "no-duplicate-imports" : [
      "error",
      {
        includeExports: true,
      },
    ],
    "no-promise-executor-return"  : "error",
    "no-self-compare"             : "error",
    "no-template-curly-in-string" : "error",
    "no-unmodified-loop-condition": "error",
    "no-use-before-define"        : "error",
    "arrow-body-style"            : [
      "error",
      "as-needed",
    ],
    "class-methods-use-this": "error",
    "curly"                 : [
      "error",
      "multi-or-nest",
      "consistent",
    ],
    "default-case"      : "error",
    "default-case-last" : "error",
    "default-param-last": "error",
    "eqeqeq"            : [
      "error",
      "always",
      {
        null: "ignore",
      },
    ],
    "func-name-matching": [
      "error",
      "always",
      {
        considerPropertyDescriptor: true,
      },
    ],
    "func-names": [
      "error",
      "always",
    ],
    "func-style": [
      "error",
      "declaration",
      {
        allowArrowFunctions: true,
      },
    ],
    "grouped-accessor-pairs": [
      "error",
      "getBeforeSet",
    ],
    "guard-for-in"                : "error",
    "logical-assignment-operators": [
      "error",
      "always",
      {
        enforceForIfStatements: true,
      },
    ],
    "max-classes-per-file": [
      "error",
      {
        ignoreExpressions: true,
        max              : 1,
      },
    ],
    "max-depth": [
      "error",
      {
        max: 4,
      },
    ],
    "max-nested-callbacks": [
      "error",
      {
        max: 3,
      },
    ],
    "max-params": [
      "error",
      {
        max: 3,
      },
    ],
    "new-cap": [
      "error",
      {
        newIsCap  : true,
        capIsNew  : false,
        properties: true,
      },
    ],
    "no-array-constructor": "error",
    "no-caller"           : "error",
    "no-console"          : [
      "error",
      {
        allow: [
          "info",
          "warn",
          "error",
        ],
      },
    ],
    "no-div-regex"  : "error",
    "no-else-return": [
      "error",
      {
        allowElseIf: false,
      },
    ],
    "no-empty-function"  : "error",
    "no-eval"            : "error",
    "no-extra-bind"      : "error",
    "no-extra-label"     : "error",
    "no-implicit-globals": "error",
    "no-implied-eval"    : "error",
    "no-iterator"        : "error",
    "no-label-var"       : "error",
    "no-lone-blocks"     : "error",
    "no-lonely-if"       : "error",
    "no-magic-numbers"   : [
      "error",
      {
        ignore                       : [...new Set(Array.from({ length: 11 }).flatMap((_, index) => [index, +`-${ index }`, `${ index }n`, `-${ index }n`]))],
        ignoreDefaultValues          : true,
        ignoreEnums                  : true,
        ignoreNumericLiteralTypes    : true,
        ignoreReadonlyClassProperties: true,
      },
    ],
    "no-multi-assign": [
      "error",
      {
        ignoreNonDeclaration: true,
      },
    ],
    "no-multi-str"         : "error",
    "no-negated-condition" : "error",
    "no-new-func"          : "error",
    "no-object-constructor": "error",
    "no-proto"             : "error",
    "no-return-assign"     : "error",
    "no-script-url"        : "error",
    "no-sequences"         : "error",
    "no-shadow"            : "error",
    "no-undefined"         : "error",
    "no-underscore-dangle" : [
      "error",
      {
        allowAfterThis           : true,
        allowAfterSuper          : true,
        allowAfterThisConstructor: true,
        allowFunctionParams      : false,
      },
    ],
    "no-unneeded-ternary"    : "error",
    "no-useless-computed-key": [
      "error",
      {
        enforceForClassMembers: true,
      },
    ],
    "no-useless-concat"     : "error",
    "no-useless-constructor": "error",
    "no-useless-rename"     : "error",
    "no-useless-return"     : "error",
    "no-var"                : "error",
    "operator-assignment"   : "error",
    "prefer-arrow-callback" : [
      "error",
      {
        allowNamedFunctions: true,
      },
    ],
    "prefer-const": [
      "error",
      {
        destructuring: "all",
      },
    ],
    "prefer-exponentiation-operator": "error",
    "prefer-numeric-literals"       : "error",
    "prefer-object-has-own"         : "error",
    "prefer-object-spread"          : "error",
    "prefer-promise-reject-errors"  : "error",
    "prefer-regex-literals"         : [
      "error",
      {
        disallowRedundantWrapping: true,
      },
    ],
    "prefer-rest-params": "error",
    "prefer-template"   : "error",
    "radix"             : [
      "error",
      "as-needed",
    ],
    "yoda": [
      "error",
      "never",
      {
        exceptRange: true,
      },
    ],
    "unicode-bom"                     : "error",
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
    "@stylistic/jsx-curly-brace-presence": [
      "error",
      {
        propElementValues: "always",
      },
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
    "@stylistic/switch-colon-spacing"  : "error",
    "import/namespace"                 : "error",
    "import/default"                   : "error",
    "import/export"                    : "error",
    "import/no-named-as-default"       : "error",
    "import/no-named-as-default-member": "error",
    "import/no-duplicates"             : [
      "error",
      {
        considerQueryString: true,
      },
    ],
    "import/no-absolute-path"    : "error",
    "import/no-cycle"            : "error",
    "import/no-named-default"    : "error",
    "import/no-self-import"      : "error",
    "import/first"               : "error",
    "import/exports-last"        : "error",
    "import/newline-after-import": [
      "error",
      {
        count: 1,
      },
    ],
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
        groups            : [
          "type-export",
          "value-export",
        ],
      },
    ],
    "unicorn/catch-error-name"                : "error",
    "unicorn/consistent-assert"               : "error",
    "unicorn/consistent-date-clone"           : "error",
    "unicorn/consistent-empty-array-spread"   : "error",
    "unicorn/consistent-existence-index-check": "error",
    "unicorn/consistent-function-scoping"     : "error",
    "unicorn/custom-error-definition"         : "error",
    "unicorn/empty-brace-spaces"              : "error",
    "unicorn/error-message"                   : "error",
    "unicorn/escape-case"                     : "error",
    "unicorn/explicit-length-check"           : "error",
    "unicorn/filename-case"                   : [
      "error",
      {
        case                  : "kebabCase",
        multipleFileExtensions: false,
      },
    ],
    "unicorn/new-for-builtins"                       : "error",
    "unicorn/no-abusive-eslint-disable"              : "error",
    "unicorn/no-accessor-recursion"                  : "error",
    "unicorn/no-anonymous-default-export"            : "error",
    "unicorn/no-array-for-each"                      : "error",
    "unicorn/no-array-method-this-argument"          : "error",
    "unicorn/no-array-reverse"                       : "error",
    "unicorn/no-array-sort"                          : "error",
    "unicorn/no-await-expression-member"             : "error",
    "unicorn/no-await-in-promise-methods"            : "error",
    "unicorn/no-console-spaces"                      : "error",
    "unicorn/no-document-cookie"                     : "error",
    "unicorn/no-empty-file"                          : "error",
    "unicorn/no-hex-escape"                          : "error",
    "unicorn/no-immediate-mutation"                  : "error",
    "unicorn/no-instanceof-builtins"                 : "error",
    "unicorn/no-invalid-fetch-options"               : "error",
    "unicorn/no-invalid-remove-event-listener"       : "error",
    "unicorn/no-lonely-if"                           : "error",
    "unicorn/no-negated-condition"                   : "error",
    "unicorn/no-negation-in-equality-check"          : "error",
    "unicorn/no-new-array"                           : "error",
    "unicorn/no-new-buffer"                          : "error",
    "unicorn/no-process-exit"                        : "error",
    "unicorn/no-single-promise-in-promise-methods"   : "error",
    "unicorn/no-static-only-class"                   : "error",
    "unicorn/no-typeof-undefined"                    : "error",
    "unicorn/no-unnecessary-array-flat-depth"        : "error",
    "unicorn/no-unnecessary-array-splice-count"      : "error",
    "unicorn/no-unnecessary-await"                   : "error",
    "unicorn/no-unnecessary-slice-end"               : "error",
    "unicorn/no-unreadable-array-destructuring"      : "error",
    "unicorn/no-unreadable-iife"                     : "error",
    "unicorn/no-useless-collection-argument"         : "error",
    "unicorn/no-useless-error-capture-stack-trace"   : "error",
    "unicorn/no-useless-length-check"                : "error",
    "unicorn/no-useless-promise-resolve-reject"      : "error",
    "unicorn/no-useless-spread"                      : "error",
    "unicorn/no-useless-switch-case"                 : "error",
    "unicorn/no-useless-undefined"                   : "error",
    "unicorn/no-zero-fractions"                      : "error",
    "unicorn/number-literal-case"                    : "error",
    "unicorn/numeric-separators-style"               : "error",
    "unicorn/prefer-add-event-listener"              : "error",
    "unicorn/prefer-array-find"                      : "error",
    "unicorn/prefer-array-flat-map"                  : "error",
    "unicorn/prefer-array-flat"                      : "error",
    "unicorn/prefer-array-index-of"                  : "error",
    "unicorn/prefer-array-some"                      : "error",
    "unicorn/prefer-at"                              : "error",
    "unicorn/prefer-bigint-literals"                 : "error",
    "unicorn/prefer-blob-reading-methods"            : "error",
    "unicorn/prefer-class-fields"                    : "error",
    "unicorn/prefer-classlist-toggle"                : "error",
    "unicorn/prefer-code-point"                      : "error",
    "unicorn/prefer-date-now"                        : "error",
    "unicorn/prefer-default-parameters"              : "error",
    "unicorn/prefer-dom-node-append"                 : "error",
    "unicorn/prefer-dom-node-remove"                 : "error",
    "unicorn/prefer-global-this"                     : "error",
    "unicorn/prefer-import-meta-properties"          : "error",
    "unicorn/prefer-includes"                        : "error",
    "unicorn/prefer-keyboard-event-key"              : "error",
    "unicorn/prefer-logical-operator-over-ternary"   : "error",
    "unicorn/prefer-math-min-max"                    : "error",
    "unicorn/prefer-math-trunc"                      : "error",
    "unicorn/prefer-modern-dom-apis"                 : "error",
    "unicorn/prefer-modern-math-apis"                : "error",
    "unicorn/prefer-module"                          : "error",
    "unicorn/prefer-native-coercion-functions"       : "error",
    "unicorn/prefer-negative-index"                  : "error",
    "unicorn/prefer-node-protocol"                   : "error",
    "unicorn/prefer-number-properties"               : "error",
    "unicorn/prefer-object-from-entries"             : "error",
    "unicorn/prefer-optional-catch-binding"          : "error",
    "unicorn/prefer-prototype-methods"               : "error",
    "unicorn/prefer-query-selector"                  : "error",
    "unicorn/prefer-reflect-apply"                   : "error",
    "unicorn/prefer-regexp-test"                     : "error",
    "unicorn/prefer-response-static-json"            : "error",
    "unicorn/prefer-set-has"                         : "error",
    "unicorn/prefer-set-size"                        : "error",
    "unicorn/prefer-spread"                          : "error",
    "unicorn/prefer-string-raw"                      : "error",
    "unicorn/prefer-string-replace-all"              : "error",
    "unicorn/prefer-string-slice"                    : "error",
    "unicorn/prefer-string-starts-ends-with"         : "error",
    "unicorn/prefer-string-trim-start-end"           : "error",
    "unicorn/prefer-structured-clone"                : "error",
    "unicorn/prefer-ternary"                         : "error",
    "unicorn/prefer-type-error"                      : "error",
    "unicorn/require-array-join-separator"           : "error",
    "unicorn/require-module-attributes"              : "error",
    "unicorn/require-module-specifiers"              : "error",
    "unicorn/require-number-to-fixed-digits-argument": "error",
    "unicorn/require-post-message-target-origin"     : "error",
    "unicorn/text-encoding-identifier-case"          : "error",
    "unicorn/throw-new-error"                        : "error",
    "no-unused-expressions"                          : "error",
    "typescript/consistent-return"                   : "error",
    "typescript/dot-notation"                        : "error",
    "typescript/ban-ts-comment"                      : [
      "error",
      {
        "ts-expect-error": "allow-with-description",
      },
    ],
    "typescript/no-deprecated"           : "error",
    "typescript/no-duplicate-enum-values": "error",
    "typescript/no-empty-object-type"    : [
      "error",
      {
        allowInterfaces: "with-single-extends",
      },
    ],
    "typescript/no-explicit-any"                    : "error",
    "typescript/no-extra-non-null-assertion"        : "error",
    "typescript/no-misused-new"                     : "error",
    "typescript/no-namespace"                       : "error",
    "typescript/no-non-null-asserted-optional-chain": "error",
    "typescript/no-require-imports"                 : "error",
    "typescript/no-this-alias"                      : "error",
    "typescript/no-unnecessary-type-constraint"     : "error",
    "typescript/no-unsafe-declaration-merging"      : "error",
    "typescript/no-unsafe-function-type"            : "error",
    "typescript/no-wrapper-object-types"            : "error",
    "typescript/prefer-as-const"                    : "error",
    "typescript/prefer-namespace-keyword"           : "error",
    "typescript/triple-slash-reference"             : "error",
    "typescript/array-type"                         : [
      "error",
      {
        default: "array-simple",
      },
    ],
    "typescript/ban-tslint-comment"          : "error",
    "typescript/class-literal-property-style": [
      "error",
      "fields",
    ],
    "typescript/consistent-generic-constructors": [
      "error",
      "constructor",
    ],
    "typescript/consistent-indexed-object-style": [
      "error",
      "record",
    ],
    "typescript/consistent-type-assertions": [
      "error",
      {
        assertionStyle             : "as",
        objectLiteralTypeAssertions: "allow-as-parameter",
      },
    ],
    "typescript/consistent-type-definitions": [
      "error",
      "interface",
    ],
    "typescript/consistent-type-exports": [
      "error",
      {
        fixMixedExportsWithInlineTypeSpecifier: true,
      },
    ],
    "typescript/consistent-type-imports": [
      "error",
      {
        prefer  : "type-imports",
        fixStyle: "inline-type-imports",
      },
    ],
    "typescript/explicit-function-return-type": [
      "error",
      {
        allowExpressions                                    : true,
        allowTypedFunctionExpressions                       : true,
        allowHigherOrderFunctions                           : true,
        allowDirectConstAssertionInArrowFunctions           : true,
        allowConciseArrowFunctionExpressionsStartingWithVoid: true,
      },
    ],
    "typescript/explicit-member-accessibility"  : "error",
    "typescript/explicit-module-boundary-types" : "error",
    "typescript/no-array-delete"                : "error",
    "typescript/no-confusing-non-null-assertion": "error",
    "typescript/no-confusing-void-expression"   : [
      "error",
      {
        ignoreArrowShorthand: true,
        ignoreVoidOperator  : true,
      },
    ],
    "typescript/no-duplicate-type-constituents"              : "error",
    "typescript/no-invalid-void-type"                        : "error",
    "typescript/no-meaningless-void-operator"                : "warn",
    "typescript/no-mixed-enums"                              : "error",
    "typescript/no-non-null-asserted-nullish-coalescing"     : "error",
    "typescript/no-unnecessary-condition"                    : "error",
    "typescript/no-unnecessary-parameter-property-assignment": "error",
    "typescript/no-unnecessary-qualifier"                    : "error",
    "typescript/no-unnecessary-template-expression"          : "error",
    "typescript/no-unnecessary-type-arguments"               : "error",
    "typescript/no-unnecessary-type-parameters"              : "error",
    "typescript/no-unsafe-enum-comparison"                   : "error",
    "typescript/no-unsafe-type-assertion"                    : "error",
    "typescript/no-unsafe-unary-minus"                       : "error",
    "typescript/no-useless-default-assignment"               : "error",
    "typescript/no-useless-empty-export"                     : "error",
    "typescript/non-nullable-type-assertion-style"           : "error",
    "typescript/prefer-find"                                 : "error",
    "typescript/prefer-for-of"                               : "error",
    "typescript/prefer-function-type"                        : "error",
    "typescript/prefer-includes"                             : "error",
    "typescript/prefer-nullish-coalescing"                   : "error",
    "typescript/prefer-optional-chain"                       : "error",
    "typescript/prefer-readonly"                             : "error",
    "typescript/prefer-reduce-type-parameter"                : "error",
    "typescript/prefer-return-this-type"                     : "error",
    "typescript/prefer-string-starts-ends-with"              : [
      "error",
      {
        allowSingleElementEquality: "always",
      },
    ],
    "typescript/promise-function-async"    : "error",
    "typescript/require-array-sort-compare": [
      "error",
      {
        ignoreStringArrays: true,
      },
    ],
    "typescript/switch-exhaustiveness-check": [
      "error",
      {
        allowDefaultCaseForExhaustiveSwitch: true,
        requireDefaultForNonUnion          : true,
        considerDefaultExhaustiveForUnions : true,
      },
    ],
    "typescript/unified-signatures": [
      "error",
      {
        ignoreDifferentlyNamedParameters: true,
      },
    ],
    "typescript/only-throw-error": "error",
    "typescript/return-await"    : [
      "error",
      "in-try-catch",
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
    "js-plugin-unicorn/better-regex"            : "error",
    "js-plugin-unicorn/consistent-destructuring": "error",
    "js-plugin-unicorn/prefer-export-from"      : ["error", { ignoreUsedVariables: true }],
    "js-plugin-unicorn/prefer-json-parse-buffer": "error",
    "js-plugin-unicorn/prefer-switch"           : "error",
    "js-plugin-unicorn/prevent-abbreviations"   : "error",

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
    // "js-plugin-typescript/method-signature-style": ["error", "method"],
    // "js-plugin-typescript/naming-convention"     : [
    //   "error",
    //   {
    //     selector: "variable",
    //     format  : ["camelCase", "UPPER_CASE"],
    //   },
    // ],
    // "js-plugin-typescript/no-unused-private-class-members": "error",
  },
  overrides: [
    {
      files: [
        "**/*.ts",
        "**/*.tsx",
        "**/*.mts",
        "**/*.cts",
      ],
      rules: {
        "constructor-super"           : "off",
        "getter-return"               : "off",
        "no-class-assign"             : "off",
        "no-const-assign"             : "off",
        "no-dupe-class-members"       : "off",
        "no-dupe-keys"                : "off",
        "no-func-assign"              : "off",
        "no-import-assign"            : "off",
        "no-new-native-nonconstructor": "off",
        "no-obj-calls"                : "off",
        "no-redeclare"                : "off",
        "no-setter-return"            : "off",
        "no-this-before-super"        : "off",
        "no-undef"                    : "off",
        "no-unreachable"              : "off",
        "no-unsafe-negation"          : "off",
        "no-with"                     : "off",
        "prefer-const"                : [
          "error",
          {
            destructuring: "all",
          },
        ],
        "prefer-spread": "error",
      },
    },
  ],
});
