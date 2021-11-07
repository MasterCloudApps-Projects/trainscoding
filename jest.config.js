const baseConfig = require('./jest.base.config');

module.exports = {
    ...baseConfig,
    coverageDirectory: 'coverage',
    testMatch: ['<rootDir>/services/*/__tests__/*.test.ts', '<rootDir>/packages/*/__tests__/*.test.ts'],
    roots: ['<rootDir>/packages', '<rootDir>/services'],
    projects: [
        { displayName: 'Service tests', testMatch: ['<rootDir>/services/*/__tests__/*.test.ts'] },
        { displayName: 'Package tests', testMatch: ['<rootDir>/packages/*/__tests__/*.test.ts'] }
    ]
};
