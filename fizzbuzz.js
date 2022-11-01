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

function printAll() {
  for (let i = 1; i <= 100; i++) {
    fizzbuzz(i);
  }
}

printAll();
