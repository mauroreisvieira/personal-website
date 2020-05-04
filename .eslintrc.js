module.exports = {
  parser: "babel-eslint",
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
  env: {
    browser: true,
    node: true,
    mocha: true,
    es6: true,
  },
  plugins: ["react", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      modules: true,
      jsx: true
    }
  },
  settings: {
    react: {
      pragma: "h",
      version: "preact"
    }
  },
  rules: {
    "no-console": 0,
    "no-empty": 0,
    semi: 2,
    "keyword-spacing": 2,
    "require-atomic-updates": 0,
    "react/no-string-refs": 2,
    "react/no-find-dom-node": 2,
    "react/no-is-mounted": 2,
    "react/jsx-no-comment-textnodes": 2,
    "react/jsx-curly-spacing": 2,
    "react/jsx-no-undef": 2,
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2
  }
};
