function maximumAmount(coins: number[][]): number {
    const m = coins.length;
    const n = coins[0].length;
    
    const dp: number[][][] = Array.from({ length: m }, () =>
        Array.from({ length: n }, () => [-Infinity, -Infinity, -Infinity])
    );
    
    dp[0][0][0] = coins[0][0];
    dp[0][0][1] = coins[0][0] < 0 ? 0 : coins[0][0];
    dp[0][0][2] = coins[0][0] < 0 ? 0 : coins[0][0];
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 && j === 0) continue; 
            for (let k = 0; k <= 2; k++) {
                let best = -Infinity;
                if (i > 0) best = Math.max(best, dp[i - 1][j][k]);
                if (j > 0) best = Math.max(best, dp[i][j - 1][k]);
                
                dp[i][j][k] = Math.max(dp[i][j][k], best + coins[i][j]);

                if (coins[i][j] < 0 && k > 0) {
                    let bestPrev = -Infinity;
                    if (i > 0) bestPrev = Math.max(bestPrev, dp[i - 1][j][k - 1]);
                    if (j > 0) bestPrev = Math.max(bestPrev, dp[i][j - 1][k - 1]);
                    dp[i][j][k] = Math.max(dp[i][j][k], bestPrev);
                }
            }
        }
    }
    
    return Math.max(...dp[m - 1][n - 1]);
}
