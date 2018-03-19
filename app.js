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
  const DUMMY_CONTENT = 'I am going to try putting Fat Igor on his shoulder next time I see\n'
  .concat('him, very curious what will happen.\n')
  .concat('Also, the scam I told you about is going better than expected. I have already gotten back\n')
  .concat('five “payments,” and only one complaint.\n')
  .concat('It is starting to make me feel a bit bad though. And you are right\n')
  .concat('that it is probably illegal in some way.\n')
  .concat('Much love,\n')
  .concat('Aunt Emily\n');

  const firstEmail = DUMMY_CONTENT
                                  .concat('died 27/04/2006: Black Leclere\n')
                                  .concat('born 05/04/2006 (mother Lady Penelope): Red Lion, Doctor Hobbles the 3rd, Little Iroquois');

  const secondEmail = DUMMY_CONTENT
                                  .concat('died 22/12/2007: Lady Penelope\n')
                                  .concat('born 01/01/2008 (mother Nami): Balck Beard, Hoffman, Bruno');

  const thirdEmail = DUMMY_CONTENT
                                  .concat('died 27/04/2006: Black Leclere\n')
                                  .concat('born 05/04/2006 (mother Lady Penelope): Red Lion, Doctor Hobbles the 3rd, Little Iroquois');

  const fourthEmail = DUMMY_CONTENT.concat('died 06/06/2008: Nami, Zoro');


  const ARCHIVE = [firstEmail, secondEmail, thirdEmail, fourthEmail];
  // Find pragraphs doing
  // FInd pragraphs starting with Born or Died
  // Find names after born, and after died
  // Add them to the set if born, remove if died

  function findParagraphs(emails){
    let paragraphs = [];
    for (var i = 0; i < emails.length; i++) {
      paragraphs = paragraphs.concat(emails[i].split("\n"));
    }
    
    return paragraphs;
  }


  function forEach(emails, func){
    for (var i = 0; i < emails.length; i++) {
      console.log(emails[i]);
    }
  }




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
