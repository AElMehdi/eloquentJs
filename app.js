function print(input){
  const result = document.getElementById("result").append(input);
}

// A closure
function createAdder(amount) {
  return function (number){
    return number + amount;
  };
}

// Optional Arguments
function power(base, exponent) {
  var result = 1;
  console.log(typeof result);
  if(exponent === undefined )
    exponent = 2;
  for(var i = 0; i < exponent; i++)
    result *= base;
  return result;
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
