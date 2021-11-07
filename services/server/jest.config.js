const baseConfig = require('./../../jest.base.config');

module.exports = {
    ...baseConfig,
    testPathIgnorePatterns: ['/node_modules/', '<rootDir>/dist/']
};
