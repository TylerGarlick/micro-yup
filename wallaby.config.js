module.exports = wallaby => ({
  files: ['src/**/*.js', 'test/**/*.js', '!test/**/*.test.js', 'package.json'],
  tests: ['test/**/*.test.js'],
  env: {
    type: 'node',
    runner: 'node',
  },
  testFramework: 'mocha',
  compilers: {
    '**/*.js': wallaby.compilers.babel(),
  },
})
