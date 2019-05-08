function add(a, b) {
  let temp = 0;
  let temp10 = 0;
  let sum = '';
  const max = a.length > b.length ? a.length : b.length;
  for (let i = 1; i <= max; i += 1) { // 從後往前面數
    temp = (Number(a[a.length - i]) || 0) + (Number(b[b.length - i]) || 0) + temp10;
    // ||0 設預設值
    temp10 = temp > 9 ? 1 : 0;
    temp %= 10;
    sum = temp + sum;
  }
  if (temp10) sum = `1${sum}`; // 如果有進位,而for 只跑一次,前面插入1
  return sum;
}
console.log(add('9', '9'));
// 輸入字串 回傳兩個字串加起來 的字串數字
module.exports = add;
