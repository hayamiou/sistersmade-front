import type { Config } from 'jest';

const config: Config = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testPathIgnorePatterns: ['<rootDir>/cypress/'],
  clearMocks: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',

  // Handle ESM files
  transform: {
    '^.+\\.(ts|js|html|mjs)$': 'jest-preset-angular',
  },

  // Don't ignore these node_modules (they must be transformed)
  transformIgnorePatterns: [
    'node_modules/(?!(@angular|rxjs|zone.js|@fullcalendar|preact)/)',
  ],

  moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],

  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.spec.json',
      stringifyContentPathRegex: '\\.html$',
    },
  },
};

export default config;
