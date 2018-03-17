function print(input){
  const result = document.getElementById("result").append(input);
}

// A closure
function createAdder(amount) {
  return function (number){
    return number + amount;
  };
}

// Optional Arguments using Recursion
function power(base, exponent) {
  if(exponent === undefined) exponent = 2;
  if(exponent === 0) return 1;
  else
    return base * power(base, exponent - 1);
}

// Use Recursion
function findSequence(goal) {
  function find(start, history) {
    if (start === goal) {
      return history;
    }
    else if (goal < start) {
      return null;
    }
    return find(start + 5, "(" + history + " + 5)") ||
           find(start * 3, "(" + history + " * 3)");
  }
  return find(1, "1");
}


// Chapter5: Functional Programming
//High Order Function
//Write a forEach function that takes an array and print it
//
// function forEach(elements, action){
//   for (var i = 0; i < elements.length; i++) {
//     action(elements[i]);
//   }
// }
//
// // Has a side effect
// function print(input){
//   //  const resultDiv = document.getElementById('result');
//   console.log(input);
//
// }
//
// forEach(["name1", "name2", "name3"], print);
