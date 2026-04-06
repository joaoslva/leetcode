import { judgeCircle } from './solution';

describe('Question 0657', () => {
    test('Test 1', () => {
        expect(judgeCircle("UD")).toBe(true);
    });

    test('Test 2', () => {
        expect(judgeCircle("UDRLDDUURRLL")).toBe(true);
    });

    test('Test 3', () => {
        expect(judgeCircle("UDL")).toBe(false);
    });
});
