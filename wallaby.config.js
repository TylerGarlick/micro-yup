module.exports = wallaby => ({
  files: [
    'src/**/*.js',
    'test/**/*.js',
    '!test/**/*.test.js',
    'package.json',
  ],
  tests: [
    'test/**/*.test.js',
  ],
  env: {
    type: 'node',
    runner: 'node',
  },
  testFramework: 'jest',
  compilers: {
    '**/*.js': wallaby.compilers.babel(),
  },
  workers: {
    restart: true,
    initial: 1,
    regular: 1,
  },
})
