/*
function countSubmatrices(grid: number[][], k: number): number {
    let result  = 0;

    for (let i=0; i<grid.length; i++) {
        for (let j=0; j<grid[0].length; j++) {
            if (recursiveSum(grid, i, j) <= k) {
                result++;
            }
        }
    }

    return result;
};

function recursiveSum(grid: number[][], i: number, j: number): number {
    if (i < 0 || j < 0) return 0;
    if (i == 0 && j == 0) return grid[i][j];
    
    return grid[i][j]+ recursiveSum(grid, i-1, j) + recursiveSum(grid, i, j-1) - recursiveSum(grid, i-1, j-1);
}
*/

function countSubmatrices(grid: number[][], k: number): number {
    const m = grid.length;
    const n = grid[0].length;
    const dp: number[][] = Array.from({length: m}, () => new Array(n).fill(0));
    let result = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            dp[i][j] = grid[i][j]
                + (i > 0 ? dp[i-1][j] : 0)
                + (j > 0 ? dp[i][j-1] : 0)
                - (i > 0 && j > 0 ? dp[i-1][j-1] : 0);

            if (dp[i][j] <= k) result++;
        }
    }

    return result;
}

export { countSubmatrices };
