const MOD = BigInt(1e9 + 7);

function modPow(base: bigint, exp: bigint, mod: bigint): bigint {
    let result = 1n;
    base = base % mod;
    while (exp > 0n) {
        if (exp % 2n === 1n) result = result * base % mod;
        exp = exp >> 1n;
        base = base * base % mod;
    }
    return result;
}

function modInverse(a: bigint, mod: bigint): bigint {
    return modPow(a, mod - 2n, mod);
}

class Fancy {
    list: [bigint, bigint, bigint][];
    globalAdd: bigint;
    globalMult: bigint;

    constructor() {
        this.list = [];
        this.globalAdd = 0n;
        this.globalMult = 1n;
    }

    append(val: number): void {
        this.list.push([BigInt(val), this.globalAdd, this.globalMult]);
    }

    addAll(inc: number): void {
        this.globalAdd = (this.globalAdd + BigInt(inc)) % MOD;
    }

    multAll(m: number): void {
        this.globalAdd  = (this.globalAdd  * BigInt(m)) % MOD;
        this.globalMult = (this.globalMult * BigInt(m)) % MOD;
    }

    getIndex(idx: number): number {
        if (idx < 0 || idx >= this.list.length) return -1;

        const [val, addSnap, multSnap] = this.list[idx];

        const multRatio = (this.globalMult * modInverse(multSnap, MOD)) % MOD;
        const result = (val * multRatio + this.globalAdd - addSnap * multRatio % MOD + MOD) % MOD;

        return Number(result);
    }
}

export { Fancy };