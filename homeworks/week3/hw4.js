function isPalindromes(str) {
  for (let i = 0; i < str.length - 1; i += 1) {
    if (str[i] !== str[str.length - i - 1]) return false;
  }
  return true;
}

console.log(isPalindromes('abcdcba'));


module.exports = isPalindromes;
