#!/bin/bash

read -p "What question do we have tormenting you today? " num

if ! [[ "$num" =~ ^[0-9]+$ ]]; then
    echo "Error: please enter a valid number."
    exit 1
fi

read -p "Enter the language you wanna suffer with today (typescript/java/cpp) [typescript]: " lang
lang="${lang:-typescript}"

case "$lang" in
    typescript|java|cpp) ;;
    *)
        echo "Error: unsupported language '$lang'. Choose: typescript, java, cpp"
        exit 1
        ;;
esac

padded=$(printf "%04d" "$num")
BASE_DIR="$(dirname "$0")/$padded"
LANG_DIR="$BASE_DIR/$lang"

if [ -d "$BASE_DIR" ]; then
    if [ -d "$LANG_DIR" ]; then
        echo "Language '$lang' already exists for question $padded at $LANG_DIR"
        exit 1
    fi
    echo "Question $padded already exists. Adding $lang..."
else
    mkdir -p "$BASE_DIR"
fi

mkdir -p "$LANG_DIR"

case "$lang" in
    typescript)
        cat > "$LANG_DIR/solution.ts" << 'EOF'
function solution(): void {
    // your code here
}

export { solution };
EOF

        cat > "$LANG_DIR/solution.test.ts" << EOF
import { solution } from './solution';

describe('Question $padded', () => {
    test('example 1', () => {
        // expect(solution()).toBe(expected);
    });
});
EOF

        cat > "$LANG_DIR/package.json" << 'EOF'
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
        ;;

    java)
        cat > "$LANG_DIR/Solution.java" << 'EOF'
class Solution {
    // your code here
}
EOF

        cat > "$LANG_DIR/SolutionTest.java" << 'EOF'
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
        ;;

    cpp)
        cat > "$LANG_DIR/solution.cpp" << 'EOF'
#include <vector>
#include <string>
using namespace std;

class Solution {
public:
    // your code here
};
EOF

        cat > "$LANG_DIR/solution_test.cpp" << EOF
#include "solution.cpp"
#include <iostream>
#include <cassert>
#include <string>
#include <vector>
using namespace std;

static int passed = 0, failed = 0;

#define EXPECT_EQ(actual, expected) do { \\
    auto _a = (actual); auto _e = (expected); \\
    if (_a == _e) { \\
        cout << "[PASS] line " << __LINE__ << "\\n"; passed++; \\
    } else { \\
        cout << "[FAIL] line " << __LINE__ << "\\n"; failed++; \\
    } \\
} while(0)

#define EXPECT_TRUE(expr) do { \\
    if (expr) { \\
        cout << "[PASS] line " << __LINE__ << "\\n"; passed++; \\
    } else { \\
        cout << "[FAIL] line " << __LINE__ << ": expected true\\n"; failed++; \\
    } \\
} while(0)

int main() {
    Solution sol;

    // Example 1
    // EXPECT_EQ(sol.method(), expected);

    cout << "\\n" << passed << " passed, " << failed << " failed\\n";
    return failed > 0 ? 1 : 0;
}
EOF
        ;;
esac

echo "Added $lang to question $padded at $LANG_DIR"
