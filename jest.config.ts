export default {
    coverageDirectory: 'coverage',
    testMatch: ['<rootDir>/services/*/__tests__/*.test.ts', '<rootDir>/packages/*/__tests__/*.test.ts'],
    preset: 'ts-jest/presets/js-with-babel',
    testPathIgnorePatterns: ['/node_modules/', 'lib'],
    roots: ['<rootDir>/packages', '<rootDir>/services'],
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
    projects: [
        { displayName: 'Service tests', testMatch: ['<rootDir>/services/*/__tests__/*.test.ts'] },
        { displayName: 'Package tests', testMatch: ['<rootDir>/packages/*/__tests__/*.test.ts'] }
    ]
};
