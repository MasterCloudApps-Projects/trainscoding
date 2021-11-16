module.exports = {
    preset: 'ts-jest/presets/js-with-babel',
    globals: {
        'ts-jest': {
            babelConfig: true
        }
    },
    testEnvironment: 'jest-environment-node',
    transform: {
        '^.+\\.js$': 'babel-jest',
        '^.+\\.ts$': 'ts-jest'
    },
    coverageDirectory: 'coverage',
    testMatch: ['<rootDir>/services/*/__tests__/*.test.ts', '<rootDir>/packages/*/__tests__/*.test.ts'],
    roots: ['<rootDir>/packages', '<rootDir>/services'],
    projects: [
        { displayName: 'Service tests', testMatch: ['<rootDir>/services/*/__tests__/*.test.ts'] },
        { displayName: 'Package tests', testMatch: ['<rootDir>/packages/*/__tests__/*.test.ts'] }
    ]
};
