const request = new XMLHttpRequest();
const html = document.querySelector('html');
const body = document.querySelector('body');
const prizeElement = document.createElement('div');
prizeElement.classList.add('prize__content');
const btn = document.querySelector('.btn');
const start = document.querySelector('.start');
const prize = document.querySelector('.prize');
let bgColor;


function playagain() {
  start.classList.add('btn');
  start.innerText = '開始抽獎';
  body.classList.remove(bgColor);
  prize.innerHTML = '';
}

function content(url, title, info) {
  prizeElement.innerHTML = `<img class=prize__image src = '${url}'>
<div class = prize__title>${title}</div>
<div class = prize__point>點任一處返回</div>
<div class = prize__info>${info}</div>
`;
}

function startPlay() {
  btn.addEventListener('click', () => {
    request.onload = () => {
      if (request.status >= 200 && request.status < 400) {
        const data = JSON.parse(request.responseText);
        let url;
        let title;
        let info;
        start.innerText = '';
        start.classList.remove('btn');
        switch (data.prize) {
          case 'FIRST':
            bgColor = 'skycolor';
            body.classList.add(bgColor);
            url = 'https://image.flaticon.com/icons/png/512/1841/1841644.png';
            title = '頭獎';
            info = '恭喜你中頭獎了！日本東京來回雙人遊！';
            content(url, title, info);
            prize.appendChild(prizeElement);
            html.addeventListener('click', playagain);
            break;
          case 'SECOND':
            bgColor = 'orangeColor';
            body.classList.add(bgColor);
            url = 'https://image.flaticon.com/icons/svg/1830/1830780.svg';
            title = '二獎';
            info = '二獎！90 吋電視一台！';
            content(url, title, info);
            prize.appendChild(prizeElement);
            html.addEventListener('click', playagain);
            break;
          case 'THIRD':
            bgColor = 'whietColor';
            body.classList.add(bgColor);
            url = 'https://image.flaticon.com/icons/svg/187/187210.svg';
            title = '三獎';
            info = '恭喜你抽中三獎：知名YouTuber 簽名握手會入場券一張，bang！';
            content(url, title, info);
            prize.appendChild(prizeElement);
            html.addEventListener('click', playagain);
            break;
          default:
            bgColor = 'blackColor';
            body.classList.add(bgColor);
            url = 'https://image.flaticon.com/icons/svg/1651/1651836.svg';
            title = '銘謝惠顧';
            info = '';
            content(url, title, info);
            prize.appendChild(prizeElement);
            html.addEventListener('click', playagain);
            break;
        }
      } else {
        alert('系統不穩定請再試一次');// eslint-disable-line no-alert
      }
    };
    request.onerror = () => {
      alert('系統不穩請再試一次', request.status);// eslint-disable-line no-alert
    };
    request.open('GET', 'https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery', true);
    request.send();
  });
}
startPlay();
