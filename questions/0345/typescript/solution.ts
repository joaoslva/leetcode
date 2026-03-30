const VOWELS = new Set(['a', 'e', 'i', 'o', 'u']);

function reverseVowels(s: string): string {
    let vowels: string[] = [];
    let reversedString: string[] = [];

    for (let i = 0; i < s.length; i++) {
        if (isVowel(s.charAt(i))) vowels.push(s.charAt(i));
    }

    for (let i = 0; i < s.length; i++) {
        if (isVowel(s.charAt(i))) reversedString.push(vowels.pop()!);
        else reversedString.push(s.charAt(i));
    }

    return reversedString.join('');
};

/*
function reverseVowels(s: string): string {
    const arr = s.split('');
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        while (left < right && !isVowel(arr[left]))  left++;
        while (left < right && !isVowel(arr[right])) right--;

        if (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }

    return arr.join('');
}
*/

function isVowel(c: string): boolean {
    return VOWELS.has(c.toLowerCase());
}

export { reverseVowels }