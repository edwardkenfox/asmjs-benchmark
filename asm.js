function asm(stdin, foreign, heap){
  "use asm";

  function fibonacci(num){
    let a = 1|0,
        b = 0|0,
        temp;

    while (num >= 0){
      temp = a|0;
      a = a|0 + b|0;
      b = temp|0;
      num = (num-1)|0;
    }

    return b|0;
  }

  return { fibonacci: fibonacci };
}
