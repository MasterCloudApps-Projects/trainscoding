import eslintConfig from '../lib/eslint-config';

describe('@trainscoding/eslint-config', () => {
    it('Should extend from prettier:standard', () => {
        expect(eslintConfig.extends).toContain('prettier-standard');
    });

    it('Should extend from eslint:recommended', () => {
        expect(eslintConfig.extends).toContain('eslint:recommended');
    });
});
