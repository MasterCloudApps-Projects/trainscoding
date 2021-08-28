export default {
    coverageDirectory: 'coverage',
    testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
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
    }
};
