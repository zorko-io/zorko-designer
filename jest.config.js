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
  },
  "coverageThreshold": {

    /**
     * @todo #76:30m/DEV Specify code coverage threshold for common
     *  - increase up to 90%
     *  - add common Selectors here
     */

    "./src/**/*Reducer.ts": {
      "branches": 50,
      "functions": 99,
      "lines": 99,
      "statements": 99
    },
    /**
     * @todo #75:30m/DEV Increase code coverage for presenters
     *  - increase up to 90%
     *  - it ok to specify only for features here
     */
    "./src/**/*Presenter.ts": {
      "branches": 50,
      "functions": 50,
      "lines": 50,
      "statements": 60
    }
  }
};
