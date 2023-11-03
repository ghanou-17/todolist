module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ["*.{js,jsx}"],
      parserOptions: {
        sourceType: "module",
      },
    },
  ],
  ignorePatterns: ["dist", ".eslintrc.js", "*.test.js", "*.config.js", "build"],
  settings: { react: { version: "18.2" } },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
