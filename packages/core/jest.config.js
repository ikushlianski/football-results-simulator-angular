const baseJestConfig = require('../../jest.config');

module.exports = {
  ...baseJestConfig,
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  clearMocks: true,
};
