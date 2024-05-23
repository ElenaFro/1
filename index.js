primeNumbers=[];
const N = 100;
const M = 1;

function isPrimeNumber(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        return false;
    }
  }  
  return number !== 1;
}


for (let i=M; i<=N; i++) {
    if (isPrimeNumber(i)) {
        primeNumbers.push(i);
    }    
}

console.log(primeNumbers);
