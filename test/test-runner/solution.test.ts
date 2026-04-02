import { areSimilar } from './solution';

describe('Question 2946', () => {
    test('example 1 - returns false when k=4 and no period divides it', () => {
        const mat = [[1,2,3],[4,5,6],[7,8,9]];
        expect(areSimilar(mat, 4)).toBe(false);
    });

    test('example 2 - returns true when k is a multiple of all row periods', () => {
        const mat = [[1,2,1,2],[1,2,1,2],[1,2,1,2]];
        expect(areSimilar(mat, 4)).toBe(true);
    });

    test('example 3 - all rows equal (period 1), any k works', () => {
        const mat = [[5,5,5],[5,5,5],[5,5,5]];
        expect(areSimilar(mat, 7)).toBe(true);
    });

    test('edge case - single element rows, always similar', () => {
        const mat = [[3],[3],[3]];
        expect(areSimilar(mat, 100)).toBe(true);
    });
});
