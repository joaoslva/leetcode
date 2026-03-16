function getBiggestThree(grid: number[][]): number[] {
    let m: number = grid.length;
    let n: number = grid[0].length;
    let result: number[] = [];

    let possible_centers: [number, number, number][] = [];
    let half_distance: number = Math.min(m, n) - 1;

    while (half_distance >= 0) {
        for (let i=0; i<m; i++) {
            for (let j=0; j<n; j++) {
                if ((i-half_distance) >= 0 && (i+half_distance) < m && (j-half_distance) >= 0 && (j+half_distance) < n) {
                    possible_centers.push([i, j, half_distance]);
                }
            }
        }

        half_distance--;
    }

    let sums= new Set<number>();

    for (let i=0; i<possible_centers.length; i++) {
        sums.add(rhombusSum(grid, possible_centers[i][0], possible_centers[i][1], possible_centers[i][2]));        
    }

    return Array.from(sums).sort((a, b) => b - a).slice(0, 3);
};

function rhombusSum(grid: number[][], r: number, c: number, k: number): number {
    if (k == 0) {
        return grid[r][c];
    }
    
    let sum: number = 0;
    let current_pos: number[] = [r-k, c];
    let directions: [number, number][] = [[1, 1], [1, -1], [-1, -1], [-1, 1]]

    for (let i=0; i<4; i++) {
        for(let j=0; j<k; j++) {
            sum += grid[current_pos[0]][current_pos[1]];
            current_pos[0] += directions[i][0];
            current_pos[1] += directions[i][1];
        }
    }

    return sum;
}

export { getBiggestThree };
