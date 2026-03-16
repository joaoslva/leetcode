# Question 1878

## Solution

The most notable thing I did here was the border transverse logic, a simple incremente in the position following the direction of the side I'm transversing at that moment

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
