// Solve Aunt Emily's Cats
  var cats = {"Spot":true};

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

  const fourthEmail = DUMMY_CONTENT.concat('died 06/06/2008: Nami, Zoro, Bruno');


  const EMAILS_ARCHIVE = [firstEmail, secondEmail, thirdEmail, fourthEmail];

  const BORN = 'born';
  const DIED = 'died';

  function runEmilysCatsProblem() {
    console.log('Initial list of living cats:', cats);
    for (var i = 0; i < EMAILS_ARCHIVE.length; i++) {
      var paragraphs = EMAILS_ARCHIVE[i].split("\n");
      map(processCatNames, filter(containsBornDied, paragraphs));
  }

  console.log('Actual list of living cats, after processing the email:', cats);

  function containsBornDied (paragraph){
    return paragraph.startsWith(BORN) || paragraph.startsWith(DIED);
  };

  function processCatNames(paragraph) {
        var names = paragraph.split(':')[1].split(',');

        if (paragraph.includes(BORN)) {
          for (name of names) {
            cats[name] = true;
          }
        }
        if (paragraph.includes(DIED)) {
          for (name of names) {
            delete cats[name];
          }
        }
      };
}

 // Helper functions
  function forEach(array, func) {
    for (var i = 0; i < array.length; i++) {
      func(array[i]);
    }
  }

  function map(func, array) {
    var result = [];
    forEach(array, function(element) {
      result.push(func(element));
    });
    return result;
  }

  function filter(func, array) {
    var result = [];
    forEach(array, function(element){
      if(func(element)){
        result.push(element);
      }
    });
    return result;
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
