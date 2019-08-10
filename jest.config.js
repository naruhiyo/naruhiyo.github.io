module.exports = {
  roots: ['./test'],
  setupFilesAfterEnv: ['./test/setupTests.ts'],
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
  transform: {
    '\\.(ts|tsx)$': 'ts-jest'
  },
  modulePaths: ['./test'],
  testMatch: ['./test/**/*.(test|spec).+(ts|tsx)'],
  collectCoverage: true,
  snapshotSerializers: ['enzyme-to-json/serializer']
};
