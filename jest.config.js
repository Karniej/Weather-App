module.exports = {
  preset: 'react-native',
  moduleDirectories: ['node_modules', 'app'],
  moduleNameMapper: {
    '@components/.*': '<rootDir>/app/components',
    '@assets/.*': 'rootDir>/app/assets',
    '@constants/.*': 'rootDir>/app/constants',
    '@images/.*': 'rootDir>/app/assets/images',
    '@screens/.*': 'rootDir>/app/screens',
  },
  testPathIgnorePatterns: ['<rootDir>/.history'],
  moduleFileExtensions: ['js', 'json'],
};
