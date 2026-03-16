#!/bin/bash

read -p "Enter question number: " num

if ! [[ "$num" =~ ^[0-9]+$ ]]; then
    echo "Error: please enter a valid number."
    exit 1
fi

padded=$(printf "%04d" "$num")
BASE_DIR="$(dirname "$0")/$padded"

if [ -d "$BASE_DIR" ]; then
    echo "Question $padded already exists at $BASE_DIR"
    exit 1
fi

mkdir -p "$BASE_DIR/typescript"
mkdir -p "$BASE_DIR/java"

# --- TypeScript: solution ---
cat > "$BASE_DIR/typescript/solution.ts" << 'EOF'
function solution(): void {
    // your code here
}

export { solution };
EOF

# --- TypeScript: test ---
cat > "$BASE_DIR/typescript/solution.test.ts" << EOF
import { solution } from './solution';

describe('Question $padded', () => {
    test('example 1', () => {
        // expect(solution()).toBe(expected);
    });
});
EOF

# --- TypeScript: package.json ---
cat > "$BASE_DIR/typescript/package.json" << 'EOF'
{
  "name": "solution",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "test": "jest"
  },
  "devDependencies": {
    "@types/jest": "^29.0.0",
    "jest": "^29.0.0",
    "ts-jest": "^29.0.0",
    "typescript": "^5.0.0"
  },
  "jest": {
    "preset": "ts-jest",
    "testEnvironment": "node"
  }
}
EOF

# --- Java: solution ---
cat > "$BASE_DIR/java/Solution.java" << 'EOF'
class Solution {
    // your code here
}
EOF

# --- Java: test ---
cat > "$BASE_DIR/java/SolutionTest.java" << 'EOF'
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class SolutionTest {

    @Test
    void testExample1() {
        Solution solution = new Solution();
        // assertEquals(expected, solution.method());
    }
}
EOF

# --- README (from template) ---
TEMPLATE="$(dirname "$0")/templates/README.md"
sed "s/{{NUMBER}}/$padded/g" "$TEMPLATE" > "$BASE_DIR/README.md"

echo "Question $padded created at $BASE_DIR"
