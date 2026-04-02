function areSimilar(mat: number[][], k: number): boolean {
    let periods: number[] = [];

    for (let i=0; i<mat.length; i++) {
        periods.push(calcPeriod(mat[i]));
    }

    return (k % periods.reduce((a, b) => lcm(a, b))) == 0;
};

function calcPeriod(array: number[]): number {
    let x = 0;
    let copyArray: number[];

    do {
        copyArray = [];
        x++;

        for (let i=0; i<array.length; i++) {
            copyArray[i] = array[(i+x) % array.length];
        }
    } while (compareArrays(array, copyArray) == false);

    return x;
}

function compareArrays(array1: number[], array2: number[]): boolean {
    for (let i=0; i<array1.length; i++) {
        if (array1[i] != array2[i]){
            return false;
        }
    }

    return true;
}

function lcm(a: number, b: number): number {
    return (a * b) / gcd(a, b);
}

function gcd(a: number, b: number): number {
    if (b == 0) return a;

    return gcd(b, a % b);
}

export {areSimilar}