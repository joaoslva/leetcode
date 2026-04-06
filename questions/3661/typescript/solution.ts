function wallsInRange(walls: number[], lo: number, hi: number): number {
    let left = 0, right = walls.length;
    while (left < right) {
        const mid = (left + right) >> 1;
        if (walls[mid] < lo) left = mid + 1;
        else right = mid;
    }
    const start = left;

    left = 0; right = walls.length;
    while (left < right) {
        const mid = (left + right) >> 1;
        if (walls[mid] <= hi) left = mid + 1;
        else right = mid;
    }
    const end = left;

    return end - start;
}

function maxWalls(robots: number[], distance: number[], walls: number[]): number {
    if (robots.length === 0 || walls.length === 0) return 0;

    const indexed = robots.map((r, i) => [r, distance[i]]);
    indexed.sort((a, b) => a[0] - b[0]);
    const sortedRobots = indexed.map(x => x[0]);
    const sortedDist   = indexed.map(x => x[1]);
    walls.sort((a, b) => a - b);

    const n = sortedRobots.length;

    const leftWalls  = new Array(n).fill(0);
    const rightWalls = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        const lo_left  = i === 0 ? -Infinity : sortedRobots[i - 1] + 1;
        const hi_left  = sortedRobots[i];
        const lo_right = sortedRobots[i];
        const hi_right = i === n - 1 ? Infinity : sortedRobots[i + 1] - 1;

        leftWalls[i]  = wallsInRange(walls, Math.max(lo_left,  sortedRobots[i] - sortedDist[i]), hi_left);
        rightWalls[i] = wallsInRange(walls, lo_right, Math.min(hi_right, sortedRobots[i] + sortedDist[i]));
    }

    const dp = new Array(n).fill(0);
    dp[0] = rightWalls[0]; 
    
    for (let i = 1; i < n; i++) {
        const fireRight = dp[i - 1] + rightWalls[i];
        const fireLeft  = (i >= 2 ? dp[i - 2] : 0) + rightWalls[i - 1] + leftWalls[i];
        dp[i] = Math.max(fireRight, fireLeft);
    }

    return dp[n - 1];
}