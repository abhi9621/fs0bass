function outerFunction() {
    let outerVariable = 'I am from the outer function';
  
    function innerFunction1() {
      console.log(`Inner function 1: ${outerVariable}`);
    }
  
    function innerFunction2() {
      console.log(`Inner function 2: ${outerVariable}`);
    }
  
    function innerFunction3() {
      console.log(`Inner function 3: ${outerVariable}`);
    }
  
    return {
      innerFunction1,
      innerFunction2,
      innerFunction3
    };
  }
  
  const closure = outerFunction();
  
  closure.innerFunction1(); // Output: Inner function 1: I am from the outer function
  closure.innerFunction2(); // Output: Inner function 2: I am from the outer function
  closure.innerFunction3(); // Output: Inner function 3: I am from the outer function