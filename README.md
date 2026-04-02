# leetcode

I bet this is nothing new to the world, a lot of people have something like this already. But here it is, my Leetcode answer bank!

Feel free to snoop around and use what I have here as an inspiration or as the literal answers, you are the big boss in that matter. I try to solve each exercise in TypeScript, Java, and C++ when I have time for all of them, otherwise just TypeScript in most cases.

## Adding a new question

```bash
cd questions
./new-question.sh
```

You'll be prompted for a question number and a language (`typescript`, `java`, or `cpp`). If the question folder already exists, the script adds the new language to it without touching the others.

## Running tests

```bash
./test/test.sh <question-number> [language]
```

Language defaults to `typescript` if omitted.

```bash
./test/test.sh 2946              # TypeScript
./test/test.sh 2946 java         # Java
./test/test.sh 2946 cpp          # C++
```

## Requirements

| Language   | Requirements                          |
|------------|---------------------------------------|
| TypeScript | Node.js, npx                          |
| Java       | JDK (javac + java)                    |
| C++        | g++ with C++17 support                |
