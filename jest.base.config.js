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
    }
};
