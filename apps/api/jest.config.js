// NOTE for fellows: this config is deliberately suboptimal.
//
// What's slow on purpose:
//   1. maxWorkers: 1 — every test file runs sequentially in one process.
//   2. collectCoverage: true — coverage instrumentation always runs,
//      even when no one is reading the report. ~30-50% slower.
//   3. globalSetup boots a real HTTP mock server; integration tests
//      hit it over real localhost TCP. Realistic latency, no fake sleeps.
//   4. No cacheDirectory configured — every run re-transforms TypeScript.
//
// Workshop 3 students will identify each of these and fix them.
// Workshop 5 students will fix #3 by introducing manual mocks instead.

/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.test.json' }],
  },
  roots: ['<rootDir>/tests'],
  testMatch: ['**/*.test.ts'],

  // SLOW: only one worker.
  maxWorkers: 4,

  // SLOW: coverage on every run.
  collectCoverage: false,
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['text', 'lcov'],

  // SLOW: nothing cached between runs.
  // (Deliberately omitting cacheDirectory.)

  globalSetup: '<rootDir>/tests/setup/globalSetup.js',
  globalTeardown: '<rootDir>/tests/setup/globalTeardown.js',

  testTimeout: 60_000,
  verbose: true,
};
