function anotherDay() {
    return("It's another Day");
}

  function receivesAFunction(callback) {
    callback();
  }

  function returnsANamedFunction(){
      return anotherDay;
  }

function returnsAnAnonymousFunction (){
    return function (){}; 
}
