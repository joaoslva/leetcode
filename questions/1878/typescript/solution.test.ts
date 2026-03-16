import { getBiggestThree } from './solution';

describe('Question 1878', () => {
    test('leetcode example 1', () => {
        let grid = [[3,4,5,1,3],[3,3,4,2,3],[20,30,200,40,10],[1,5,5,4,1],[4,3,2,2,5]]
        expect(getBiggestThree(grid)).toStrictEqual([228,216,211])
    });

    test('leetcode example 2', () => {
        let grid = [[1,2,3],[4,5,6],[7,8,9]]
        expect(getBiggestThree(grid)).toStrictEqual([20,9,8])
    });

    test('leetcode example 3', () => {
        let grid = [[7,7,7]]
        expect(getBiggestThree(grid)).toStrictEqual([7])
    });
});
