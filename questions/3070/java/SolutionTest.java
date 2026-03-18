import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class SolutionTest {
    private final Solution solution = new Solution();

    @Test
    void testExample1_2x3GridK18Returns4() {
        int[][] grid = {{7, 6, 3}, {6, 6, 1}};
        assertEquals(4, solution.countSubmatrices(grid, 18));
    }

    @Test
    void testExample2_3x3GridK20Returns6() {
        int[][] grid = {{7, 2, 9}, {1, 5, 0}, {2, 6, 6}};
        assertEquals(6, solution.countSubmatrices(grid, 20));
    }

    @Test
    void testSingleCellBelowK() {
        int[][] grid = {{5}};
        assertEquals(1, solution.countSubmatrices(grid, 5));
    }

    @Test
    void testSingleCellAboveK() {
        int[][] grid = {{10}};
        assertEquals(0, solution.countSubmatrices(grid, 5));
    }

    @Test
    void testAllZerosWithKZero() {
        int[][] grid = {{0, 0}, {0, 0}};
        assertEquals(4, solution.countSubmatrices(grid, 0));
    }

    @Test
    void testLargeKReturnsAllSubmatrices() {
        int[][] grid = {{1, 2}, {3, 4}};
        assertEquals(4, solution.countSubmatrices(grid, 1000));
    }
}