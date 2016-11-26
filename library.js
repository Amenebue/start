function checKer(num) {
  if (num % 5 === 0 && num % 3 === 0){
    console.log('FizzBuzz');
  }

  else if (num % 5 === 0) {
    console.log ('Buzz');
  }
  
  else if (num % 3 === 0) {

    console.log ('Fizz');
  }
}

console.log(checKer(3))