import { canBeEqual } from './solution';

describe('Question 2839', () => {
    test('swap odd indices only - returns true', () => {
        expect(canBeEqual("abcd", "cdab")).toBe(true);
    });

    test('swap even indices only - returns true', () => {
        expect(canBeEqual("abcd", "abdc")).toBe(false);
    });

    test('no swap needed - identical strings', () => {
        expect(canBeEqual("abcd", "abcd")).toBe(true);
    });

    test('neither swap makes them equal - returns false', () => {
        expect(canBeEqual("abcd", "dcba")).toBe(false);
    });

    test('edge case - all same characters', () => {
        expect(canBeEqual("aaaa", "aaaa")).toBe(true);
    });
});
