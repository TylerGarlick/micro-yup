module.exports = {
  use: [
    [
      '@neutrinojs/airbnb-base', {
      eslint: {
        rules: {
          semi: 'off',
        },
      },
    },
    ],
    [
      '@neutrinojs/library',
      {
        name: 'micro-yup',
      },
    ],
    '@neutrinojs/jest',
  ],
}
