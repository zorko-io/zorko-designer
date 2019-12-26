module.exports = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: [
    './src'
  ],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.ts?(x)',
    '<rootDir>/src/**/?(*)(Test).ts?(x)'
  ],
  collectCoverageFrom: ['src/**/*.ts'],
  // transformIgnorePatterns: ['/node_modules/vega-lite/build/src/data']
  moduleNameMapper: {
    'vega-lite/build/src/data': '<rootDir>/stubs/GlobalStub.ts'
  }
};
