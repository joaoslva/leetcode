import { Fancy } from "./solution";

describe("Fancy", () => {
    it("leetcode example", () => {
        const fancy = new Fancy();
        fancy.append(2);
        fancy.addAll(3);
        fancy.append(7);
        fancy.multAll(2);
        expect(fancy.getIndex(0)).toBe(10);
        fancy.addAll(3);
        fancy.append(10);
        fancy.multAll(2);
        expect(fancy.getIndex(0)).toBe(26);
        expect(fancy.getIndex(1)).toBe(34);
        expect(fancy.getIndex(2)).toBe(20);
    });

    it("returns -1 for out-of-bounds index", () => {
        const fancy = new Fancy();
        expect(fancy.getIndex(0)).toBe(-1);
        fancy.append(5);
        expect(fancy.getIndex(1)).toBe(-1);
    });

    it("operations before append do not affect appended value", () => {
        const fancy = new Fancy();
        fancy.addAll(10);
        fancy.multAll(3);
        fancy.append(1);
        expect(fancy.getIndex(0)).toBe(1);
    });

    it("handles modulo for large values", () => {
        const MOD = 1_000_000_007;
        const fancy = new Fancy();
        fancy.append(1_000_000_000);
        fancy.addAll(1_000_000_000);
        expect(fancy.getIndex(0)).toBe((1_000_000_000 + 1_000_000_000) % MOD);
    });
});
