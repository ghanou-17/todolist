module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
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
  ignorePatterns: ["dist", ".eslintrc.js", "*.test.js", "*.config.js"],
  settings: { react: { version: "18.2" } },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {},
};
