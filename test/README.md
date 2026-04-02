# Running Tests

```bash
./test/test.sh <question-number> [language]
```

Language defaults to `typescript` if omitted. Supported: `typescript`, `java`, `cpp`.

```bash
./test/test.sh 2946
./test/test.sh 2946 java
./test/test.sh 2946 cpp
```

## Requirements

| Language   | Requirements         |
|------------|----------------------|
| TypeScript | Node.js, npx         |
| Java       | JDK (javac + java)   |
| C++        | g++ with C++17       |
