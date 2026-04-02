#!/usr/bin/env bash
set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_ROOT="$(dirname "$SCRIPT_DIR")"

if [ -z "$1" ]; then
    echo "Usage: ./test/test.sh <question-number> [language]"
    echo "  e.g: ./test/test.sh 2946"
    echo "  e.g: ./test/test.sh 2946 java"
    echo "  e.g: ./test/test.sh 2946 cpp"
    exit 1
fi

QUESTION=$(printf "%04d" "$1")
LANG="${2:-typescript}"
QUESTION_DIR="$REPO_ROOT/questions/$QUESTION/$LANG"

if [ ! -d "$QUESTION_DIR" ]; then
    echo "Error: $QUESTION_DIR not found"
    exit 1
fi

case "$LANG" in
    typescript)
        RUNNER_DIR="$SCRIPT_DIR/test-runner"
        cp "$QUESTION_DIR/solution.ts" "$RUNNER_DIR/solution.ts"
        cp "$QUESTION_DIR/solution.test.ts" "$RUNNER_DIR/solution.test.ts"
        cd "$RUNNER_DIR"
        npx jest --clearCache > /dev/null 2>&1
        npx jest
        ;;
    java)
        JAR="$SCRIPT_DIR/junit-platform-console-standalone-6.1.0-M1.jar"
        cd "$QUESTION_DIR"
        javac -cp "$JAR" Solution.java SolutionTest.java
        java -jar "$JAR" execute --class-path . --select-class SolutionTest
        ;;
    cpp)
        cd "$QUESTION_DIR"
        g++ -std=c++17 -o solution_test solution_test.cpp
        ./solution_test
        rm -f solution_test
        ;;
    *)
        echo "Error: unsupported language '$LANG'. Supported: typescript, java, cpp"
        exit 1
        ;;
esac
