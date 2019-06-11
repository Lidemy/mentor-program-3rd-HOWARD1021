// 點一個數字num 顯示現在 input 上面//
const btn = document.querySelector('.btn__pad');
const result = document.querySelector('.result');
let firstNumber = '';
let secondNumber = '';
let operator = '';
// AC清空數字 //
function initialize() {
  firstNumber = '';
  secondNumber = '';
  operator = '';
}
btn.addEventListener('click', (e) => {
  if (operator === '' && e.target.className === 'num') {
    firstNumber += e.target.innerText;
    // 想改變 result 的值//
    result.innerText = firstNumber;
  }
  if (e.target.className === 'operator') {
    operator = e.target.innerText;
  }
  if (operator !== '' && e.target.className === 'num') {
    secondNumber += e.target.innerText;
    result.innerText = secondNumber;
  }
  if (e.target.id === 'equal') {
    switch (operator) {
      case '+': { const plusNumber = Number(firstNumber) + Number(secondNumber);
        result.innerText = plusNumber;
        initialize();
        break;
      }
      case '-': { const minusNumber = Number(firstNumber) - Number(secondNumber);
        result.innerText = minusNumber;
        initialize();
        break;
      }
      case '*': { const mutiNumber = Number(firstNumber) * Number(secondNumber);
        result.innerText = mutiNumber;
        initialize();
        break;
      }
      case '/': { const divideNumber = Number(firstNumber) / Number(secondNumber);
        result.innerText = divideNumber;
        initialize();
        break;
      }
      default:
        // statements_def
        break;
    }
  }
  if (e.target.id === 'ac') {
    result.innerText = '0';
    initialize();
  }
});
