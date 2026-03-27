class Solution {
    public boolean areSimilar(int[][] mat, int k) {
        int lcm = 1;
        for (int[] row : mat) {
            lcm = lcm(lcm, calcPeriod(row));
        }
        return k % lcm == 0;
    }

    private int calcPeriod(int[] array) {
        int n = array.length;
        for (int x = 1; x <= n; x++) {
            boolean match = true;
            for (int i = 0; i < n; i++) {
                if (array[i] != array[(i + x) % n]) {
                    match = false;
                    break;
                }
            }
            if (match) return x;
        }
        return n;
    }

    private int lcm(int a, int b) {
        return a / gcd(a, b) * b;
    }

    private int gcd(int a, int b) {
        return b == 0 ? a : gcd(b, a % b);
    }
}
