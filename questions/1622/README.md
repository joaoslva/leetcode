# Question 1622

## Solution

This looked ultra simple, but it was a `Hard` question I quickly found out why. Loss of precision with big numbers is a thing and thats where the code I made originally was breaking, because I was simply using normal arithemetic

So I had to dig deep into math and use some cool stuff to counter the exponential growth of the API numbers, like:

1. Modular arithmetic is distributive over addtition, subtraction and multiplication
    ``` 
    (a + b) % p  =  ((a % p) + (b % p)) % p
    (a * b) % p  =  ((a % p) * (b % p)) % p
    ```

2. The numbers all only calculated when needed, so the list stores the number added plus the a "snapshot" of the state of the sums and multiplication, to factor for previous operations that should not affect the added number

    ```
    currentValue = val * mult_since_append + add_since_append
    ```
    ```
    mult_since_append = globalMult / multSnap
    ```
    ```
    add_since_append = globalAdd - addSnap * mult_since_append
    ```

3. Fermat's Theorem was the key, but honestly I could not get here without a lot of research and a little push by my dear friend Claude haha. The logic behind it is finding a number such that

    ```
    multiplying by x  ≡  dividing by y   (mod z)
    ```

    Something like

    ```
    10 / 3 mod 7  =  10 * 5 mod 7  =  50 mod 7  =  1
    ```

    That magical number is what multplies by `a` bellow, and it can be calculated by exponentiation by squaring

    ```
    a * a^(p-2) ≡ 1  (mod p)
    ```

These are all the math concepts that are translated to the solution!

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
