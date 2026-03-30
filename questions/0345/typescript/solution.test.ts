import { reverseVowels } from './solution';

describe('Question 0345', () => {
    test('basic case - reverses vowels only', () => {
        expect(reverseVowels("hello")).toBe("holle");
    });

    test('multiple vowels spread across string', () => {
        expect(reverseVowels("leetcode")).toBe("leotcede");
    });

    test('no vowels - string unchanged', () => {
        expect(reverseVowels("rhythm")).toBe("rhythm");
    });

    test('all vowels - fully reversed', () => {
        expect(reverseVowels("aeiou")).toBe("uoiea");
    });

    test('uppercase vowels are treated as vowels', () => {
        expect(reverseVowels("hEllo")).toBe("hollE");
    });
});
