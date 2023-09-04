module.exports = {
    env: {
        "browser": true,
        "es6": true,
        "node": true,
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        "ecmaFeatures": {
            "jsx": true,
        },
        "ecmaVersion": 12,
        "sourceType": "module",
    },
    plugins: [
        "@typescript-eslint",
        "react",
        "import",
    ],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/recommended",
        "plugin:import/typescript",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
    ],
    settings: {
        "import/resolver": {
            "typescript": true,
            "node": true,
        },
        "react": {
            "version": "detect",
        }
    },
    root: true,
    rules: {
        "quotes": ["error", "double"],
    }
};
