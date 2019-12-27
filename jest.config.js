module.exports = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: [
    './src'
  ],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.ts?(x)',
    '<rootDir>/src/**/?(*)(Test|Tests).ts?(x)'
  ],
  collectCoverageFrom: ['src/**/*.ts'],
  moduleNameMapper: {
    'vega-lite/build/src/data': '<rootDir>/stubs/GlobalStub.ts'
  }
};
