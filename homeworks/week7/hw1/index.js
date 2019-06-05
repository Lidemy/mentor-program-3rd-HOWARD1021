const btn = document.querySelector('.btn');
const body = document.querySelector('body');
let time = Math.random() * 2000 + 1000;
let startTime = 0;
let endTime = 0;
let colorTimer = 0;
let gameStarted = true;

function getRandomColor() {
  const letters = '0123456789ABCDEF'.split('');
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function startGame(e) {
// 重置開始時間
  startTime = 0;
  body.style.background = '#003246';
  // 背景變色，並且從變色開始計算時間
  colorTimer = setTimeout(() => {
    body.style.background = getRandomColor();
    startTime = new Date();
  }, time);
  // 沒寫 e.stopPropagation 會產生冒泡到 body 然後觸發 function mouseClick 跑出 alert 的問題
  e.stopPropagation();
  gameStarted = true;
  btn.innerText = '再試一次';
  btn.classList.toggle('hide__btn');
}
function mouseClick() {
  const { backgroundColor } = body.style;
  // 避免有人點開始遊戲以外的判斷
  if (btn.innerText === '開始遊戲') {
    alert('請點開始遊戲');// eslint-disable-line no-alert
  } else {
    // 判斷有無開始遊戲，有按下開始鈕才執行下面 code
    if (gameStarted) {
      endTime = new Date();
      const score = (endTime - startTime) / 1000;
      if (backgroundColor === 'rgb(0, 50, 70)') {
        alert('年輕人太衝動瞜');// eslint-disable-line no-alert
        clearTimeout(colorTimer);
      } else {
        alert(` 你的成績是 ${score} 秒`);// eslint-disable-line no-alert
      }
      // 重置隨機時間
      time = Math.random() * 2000 + 1000;
      // 顯示再來一次按鈕
      btn.classList.toggle('hide__btn');
    }
    gameStarted = false;
  }
}

btn.addEventListener('click', (e) => {
  if (e.target.nodeName === 'BUTTON') {
    startGame(e);
  }
});

body.addEventListener('click', mouseClick);
