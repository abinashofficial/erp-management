module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'], // 👈 required for type-aware rules
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking', // 👈 enables type-aware rules
  ],
  rules: {
    // You can enable or adjust specific rules
    '@typescript-eslint/no-floating-promises': 'warn',
    '@typescript-eslint/restrict-template-expressions': 'error',
  },
};
