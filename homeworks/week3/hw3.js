function isPrime(n) {
  console.log(n);
}

module.exports = isPrime;
function isprime(n) {
  if (n === 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isprime(7));

module.exports = isprime;
