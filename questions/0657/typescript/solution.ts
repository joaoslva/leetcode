function judgeCircle(moves: string): boolean {
    const vertical: number = moves.split("").filter(move => move === "U").length - moves.split("").filter(move => move === "D").length;
    const horizontal: number = moves.split("").filter(move => move === "R").length - moves.split("").filter(move => move === "L").length;
    return vertical === 0 && horizontal === 0;

};

/* A simple for loop would be better in perfermance
   Like so:

   let i: number = 0;
   let j: number = 0;

   for (const move of moves) {
        if (move === "U") i++;
        else if (move === "D") i--;
        else if (move === "L") j--;
        else j++;
   }

   return i === 0 && j === 0;

export { judgeCircle };