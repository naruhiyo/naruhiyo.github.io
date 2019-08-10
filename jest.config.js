module.exports = {
  setupFilesAfterEnv: ['<rootDir>/test/setupTests.ts'],
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
  transform: {
    '\\.(ts|tsx)$': 'ts-jest'
  },
  modulePaths: ['./test'],
  testMatch: ['<rootDir>/test/spec/**/*.(test|spec).+(ts|tsx)'],
  collectCoverage: true,
  snapshotSerializers: ['enzyme-to-json/serializer']
};
