// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");

module.exports = tseslint.config(
  {
    files: ["**/*.ts"],
    ignores: ["coverage/**", "**/*.spec.ts"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      "no-else-return": ["error", { "allowElseIf": false }],
      "newline-per-chained-call": ["error", { "ignoreChainWithDepth": 2 }],
      "@typescript-eslint/max-params": ["warn", { max: 3 }],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/member-ordering": [
        "error",
        {
          "default": [
            "field",
            "constructor",
            "method"
          ]
        }
      ],
      "@typescript-eslint/naming-convention": [
        "error",
        {
          "selector": "variable",
          "format": ["camelCase", "UPPER_CASE"]
        },
        {
          "selector": "function",
          "format": ["camelCase"]
        },
        {
          "selector": "class",
          "format": ["PascalCase"]
        },
        {
          "selector": "interface",
          "format": ["PascalCase"]
        },
        {
          "selector": "typeAlias",
          "format": ["PascalCase"]
        },
        {
          selector: "memberLike",
          modifiers: ["private"],
          format: ["camelCase", "UPPER_CASE"],
          leadingUnderscore: "require",
        },
        {
          selector: "memberLike",
          modifiers: ["protected", "public"],
          format: ["camelCase"],
          leadingUnderscore: "forbid",
        },
      ],
      "@typescript-eslint/no-magic-numbers": "warn",
      "@angular-eslint/no-input-rename": "error",
      "@angular-eslint/use-lifecycle-interface": "error",
      "@angular-eslint/component-class-suffix": "error",
      "@angular-eslint/directive-class-suffix": "error",
      "@angular-eslint/no-async-lifecycle-method": "error",
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          style: "kebab-case",
        },
      ],
    },
  },
  {
    files: ["**/*.html"],
    ignores: ["coverage/**", "**/*.spec.ts"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {
      "@angular-eslint/template/no-negated-async": "error",
      "@angular-eslint/template/alt-text": "error",
      "@angular-eslint/template/banana-in-box": "error",
      "@angular-eslint/template/button-has-type": "error",
      "@angular-eslint/template/no-duplicate-attributes": "error",
      "@angular-eslint/template/eqeqeq": "error",
      "@angular-eslint/template/no-call-expression": "warn",
      "@angular-eslint/template/no-distracting-elements": "warn",
      "@angular-eslint/template/mouse-events-have-key-events": "warn",
      "@angular-eslint/template/no-inline-styles": "warn",
      "@angular-eslint/template/no-interpolation-in-attributes": "warn",
      "@angular-eslint/template/prefer-control-flow": "warn",
    },
  }
);
