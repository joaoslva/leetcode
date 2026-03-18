import { countSubmatrices } from "./solution";

describe("countSubmatrices", () => {
    test("example 1: 2x3 grid with k=18 returns 4", () => {
        const grid = [[7, 6, 3], [6, 6, 1]];
        const k = 18;
        expect(countSubmatrices(grid, k)).toBe(4);
    });

    test("example 2: 3x3 grid with k=20 returns 6", () => {
        const grid = [[7, 2, 9], [1, 5, 0], [2, 6, 6]];
        const k = 20;
        expect(countSubmatrices(grid, k)).toBe(6);
    });

    test("single cell grid where cell <= k returns 1", () => {
        const grid = [[5]];
        const k = 5;
        expect(countSubmatrices(grid, k)).toBe(1);
    });

    test("single cell grid where cell > k returns 0", () => {
        const grid = [[10]];
        const k = 5;
        expect(countSubmatrices(grid, k)).toBe(0);
    });

    test("k=0 with all zeros returns all submatrices", () => {
        const grid = [[0, 0], [0, 0]];
        const k = 0;
        expect(countSubmatrices(grid, k)).toBe(4); // all 4 submatrices sum to 0
    });

    test("k very large returns all submatrices", () => {
        const grid = [[1, 2], [3, 4]];
        const k = 1000;
        expect(countSubmatrices(grid, k)).toBe(4); // all 4 submatrices qualify
    });
});