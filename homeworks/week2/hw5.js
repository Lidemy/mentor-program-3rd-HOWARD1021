function join(arr, concatStr) {
  let newStr = '';
  newStr += arr[0];
  for (let i = 1; i < arr.length; i += 1) {
    newStr += concatStr;
    newStr += arr[i];
  }
  return newStr;
}
console.log(join(['a', 'b', 'c'], '!'));

function repeat(str, n) {
  let num = '';
  for (let i = 0; i <= n; i += 1) {
    num += str;
  }
  return num;
}
console.log(repeat('hey', 5));
