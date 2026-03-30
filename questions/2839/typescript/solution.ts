function canBeEqual(s1: string, s2: string): boolean {
    if (s1 == s2) return true;

    const s2Array = s2.split("");

    // only 0↔2
    [s2Array[0], s2Array[2]] = [s2Array[2], s2Array[0]];
    if (s1 == s2Array.join("")) return true;

    // both 0↔2 and 1↔3
    [s2Array[1], s2Array[3]] = [s2Array[3], s2Array[1]];
    if (s1 == s2Array.join("")) return true;

    // only 1↔3 (undo 0↔2)
    [s2Array[0], s2Array[2]] = [s2Array[2], s2Array[0]];
    return s1 == s2Array.join("");
}

export { canBeEqual }