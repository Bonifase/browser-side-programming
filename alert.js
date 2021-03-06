alert("I'm JavaScript!");

[1, 2].forEach(alert);

let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  alert( i );
  i++;
}

let k = 0;
do {
  alert( k );
  k++;
} while (k < 3);


// for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
//     alert(i);
//   }

// begin	i = 0	Executes once upon entering the loop.
// condition	i < 3	Checked before every loop iteration. If false, the loop stops.
// step	i++	Executes after the body on each iteration but before the condition check.
// body	alert(i)	Runs again and again while the condition is truthy.
let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too large' );
    break;
  default:
    alert( "I don't know such values" );
}

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Do you have permission from your parents?');
  }
}

let age = prompt('How old are you?', 18);

if ( checkAge(age) ) {
  alert( 'Access granted' );
} else {
  alert( 'Access denied' );
}
// show prime
function showPrimes(n) {
  nextPrime: for (let q = 2; q < n; q++) {

    for (let j = 2; j < q; j++) {
      if (q % j == 0) continue nextPrime;
    }

    alert( q ); // a prime
  }
}

// check prime numbers
function isPrime(n) {
  for (let w = 2; w < n; w++) {
    if ( n % w == 0) return false;
  }
  return true;
}