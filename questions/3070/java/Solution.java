class Solution {
    public int countSubmatrices(int[][] grid, int k) {
        int m = grid.length;
        int n = grid[0].length;
        int[][] dp = new int[m][n];
        int result = 0;

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                dp[i][j] = grid[i][j]
                    + (i > 0 ? dp[i-1][j] : 0)
                    + (j > 0 ? dp[i][j-1] : 0)
                    - (i > 0 && j > 0 ? dp[i-1][j-1] : 0);

                if (dp[i][j] <= k) result++;
            }
        }

        return result;
    }
}