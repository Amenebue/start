function checKer(num) {
  if(num % 3 === 0) {
    console.log ('Fizz');
  }

  if(num % 5 === 0) {
    console.log ('Buzz');
  }
  
  if (num % 5 === 0 && num % 3 === 0){
    console.log('FizzBuzz');
  }
}

console.log(checKer(30))