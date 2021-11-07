import eslintConfig from '../lib/eslint-config';

describe('@trainscoding/eslint-config', () => {
    it('Should extend from eslint:recommended', () => {
        expect(eslintConfig.extends).toContain('eslint:recommended');
    });
});
