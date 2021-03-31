module.exports = {
  globals: {
    TZ: 'Asia/Tokyo'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  moduleFileExtensions: [
    'js',
    'json'
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/app/**/*.js'
  ]
}
