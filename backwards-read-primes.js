// Task
// Find all Backwards Read Primes between two positive given numbers (both inclusive), the second one always being greater than or equal to the first one. The resulting array or the resulting string will be ordered following the natural order of the prime numbers.

// Examples (in general form):
// backwardsPrime(2, 100) => [13, 17, 31, 37, 71, 73, 79, 97] 
// backwardsPrime(9900, 10000) => [9923, 9931, 9941, 9967] 
// backwardsPrime(501, 599) => []

const isPrime = n => {
  for (let i = 2; i <= Math.sqrt(n); i++) 
    if (n % i === 0) return false;

  return true;
}

const reverse = (n) => {
  const s = "" + n;   
  return s.split("").reverse().join("");
}

function backwardsPrime(start, stop){
  const arr = [];

  for (let i = start; i <= stop; i++) {
    arr.push(i);
  }

  return arr.filter(element => 
    isPrime(element) && 
    ("" + element) !== reverse(element) && 
    isPrime(parseInt(reverse(element))) 
  )

}

console.log(backwardsPrime(2, 100))// => [13, 17, 31, 37, 71, 73, 79, 97] 
console.log(backwardsPrime(9900, 10000))// => [9923, 9931, 9941, 9967] 
console.log(backwardsPrime(501, 599))// => []