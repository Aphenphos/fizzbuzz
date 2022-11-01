//using modulo

function fizzbuzz(number) {
  //fizzbuzz
  if (number % 3 === 0 && number % 5 === 0) {
    console.log("fizzbuzz");
  }
  //fizz
  else if (number % 3 === 0) {
    console.log("fizz");
  }
  //buzz
  else if (number % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(number);
  }
}

//using float checks
function fizzdiv(number) {
  if (Number.isInteger(number / 3) && Number.isInteger(number / 5)) {
    console.log("fizzbuzz");
  } else if (Number.isInteger(number / 3)) {
    console.log("fizz");
  } else if (Number.isInteger(number / 5)) {
    console.log("buzz");
  } else {
    console.log(number);
  }
}

function print() {
  console.log("----- MODULO METHOD -----");
  for (let i = 1; i <= 100; i++) {
    fizzbuzz(i);
  }
}

function printDiv() {
  console.log("---- FLOAT METHOD ----");
  for (let i = 1; i <= 100; i++) {
    fizzdiv(i);
  }
}

print();
printDiv();
