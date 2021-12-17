import PrettierConfig from "../lib/prettier-config";

describe("@trainscoding/prettier-config", () => {
    it("Should extend from prettier:standard", () => {
        expect(PrettierConfig.printWidth).toBe(120);
    });

    it("Should extend from eslint:recommended", () => {
        expect(PrettierConfig.singleQuote).toBe(true);
    });
});
