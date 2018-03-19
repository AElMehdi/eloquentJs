// Aunt Emily's Cats
// Create a set starting one object which is a cat
var cats = {"Spot":true};

// Sample entries
  //
  // 'Emily died 27/04/2006: Black Leclère' +
  // 'born 05/04/2006 (mother Lady Penelope): Red Lion, Doctor' +
  // 'Hobbles the 3rd, Little Iroquois',
  //
  // 'Emily died 27/04/2006: Black Leclère' +
  // 'born 05/04/2006 (mother Lady Penelope): Red Lion, Doctor' +
  // 'Hobbles the 3rd, Little Iroquois'

// Get pragraphs with born or died
  const ARCHIVE = ['Emily died 27/04/2006: Black Leclere'
   + 'born 05/04/2006 (mother Lady Penelope): Red Lion, Doctor Hobbles the 3rd, Little Iroquois',

  'Emily died 22/12/2007: Lady Penelope' +
  'born 01/01/2008 (mother Nami): Balck Beard, Hoffman, Bruno',

  'born 05/04/2008 (mother Black Beard): Zoro, Luffy',

  'Emily died 06/06/2008: Nami, Zoro'];


function print(input){
  const result = document.getElementById("result");
  result.innerHTML = "";
  result.append(input);
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
