// Callback function
function receivesAFunction(define) { //defines the function
    console.log("Receiving a function..."); //message to console.log
    define(); // Calling the received function
  }
  
  function anotherFunction() {
    console.log("This is my call back function being called.");
  }
  
  receivesAFunction(anotherFunction); // Pass the function 'anotherFunction' as an argument (in parenthesis means an argument)


// takes no arguments and returns a named function
function returnsANamedFunction(){
 return function whatTheHell(hell){
  console.log ("This is hard");
 }
};

returnsANamedFunction()
  
// takes no arguments and returns an anonomous function
function returnsAnAnonymousFunction(){
  return function(){
    console.log ("is this anonymous?");
  }
}

returnsAnAnonymousFunction()
  