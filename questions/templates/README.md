# Question {{NUMBER}}

## Solution

## How to Run Tests

### TypeScript

```bash
cd typescript
npm install   # only needed the first time
npm test
```

### Java

```bash
cd java
javac -cp ../../templates/junit-platform-console-standalone.jar Solution.java SolutionTest.java
java -jar ../../templates/junit-platform-console-standalone.jar --class-path . --select-class SolutionTest
```
