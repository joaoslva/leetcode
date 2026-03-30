#!/usr/bin/env bash
set -e

if [ -z "$1" ]; then
    echo "Usage: ./test <question-number> [language]"
    echo "  e.g: ./test 2946"
    echo "  e.g: ./test 2946 typescript"
    exit 1
fi

QUESTION=$(printf "%04d" "$1")
LANG="${2:-typescript}"
QUESTION_DIR="questions/$QUESTION/$LANG"

if [ ! -d "$QUESTION_DIR" ]; then
    echo "Error: $QUESTION_DIR not found"
    exit 1
fi

RUNNER_DIR="test-runner"

cp "$QUESTION_DIR/solution.ts" "$RUNNER_DIR/solution.ts"
cp "$QUESTION_DIR/solution.test.ts" "$RUNNER_DIR/solution.test.ts"

cd "$RUNNER_DIR"
npx jest --clearCache > /dev/null 2>&1
npx jest
