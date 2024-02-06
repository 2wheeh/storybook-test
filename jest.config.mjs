import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  globalSetup: '<rootDir>/global-setup.mjs',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // https://github.com/jsdom/jsdom/issues/1724
  testEnvironment: '<rootDir>/fixed-environment-jsdom.ts',
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);

// https://nextjs.org/docs/pages/building-your-application/optimizing/testing#setting-up-jest-with-the-rust-compiler
// https://github.com/vercel/next.js/tree/canary/examples/with-jest
