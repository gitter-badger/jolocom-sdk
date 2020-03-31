module.exports = {
  preset: 'ts-jest',
  setupFiles: ['./tests/utils/setup.ts'],
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tests/assetsTransformer.js',
  },
  moduleDirectories: ['node_modules', '<rootDir>'],
  testMatch: ['**/tests/**/*.test.[tj]s?(x)'],
  testPathIgnorePatterns: ['/node_modules/.*', '/legacy/.*'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
}
