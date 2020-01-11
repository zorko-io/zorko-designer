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
     * @todo #76:1h/DEV Specify code coverage threhold for common
     *  - increase up to 80%
     *  - add common section here
     */

    /**
     * @todo #76:1h/DEV Increase code coverage for reducers
     *  - increase up to 80%
     *  - it ok to specify only for features here
     */
    "./src/**/*Reducer.ts": {
      "branches": 100,
      "functions": 50,
      "lines": 50,
      "statements": 60
    },
    /**
     * @todo #75:1h/DEV Increase code coverage for presenters
     *  - increase up to 80%
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
