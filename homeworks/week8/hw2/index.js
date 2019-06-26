const boardData = document.querySelector('.board__data');
const newData = document.querySelector('.form__textarea');
const btn = document.querySelector('.btn');
let result;


function showmessage(data) {
  boardData.innerHTML = '';
  for (let i = 0; i < data.length; i += 1) {
    result = document.createElement('div');
    result.classList.add('message-itmes');
    result.innerHTML = `${data[i].id} 樓: ${data[i].content}`;
    boardData.appendChild(result);
  }
}

function loadData() {
  const request = new XMLHttpRequest();
  request.onload = () => {
    if (request.status >= 200 && request.status < 400) {
      const json = JSON.parse(request.responseText);
      showmessage(json);
    } else {
      console.log(request.status);
    }
  };
  request.onerror = () => {
    console.log('error');
  };
  request.open('GET',
    'https://lidemy-book-store.herokuapp.com/posts?_limit=20&_sort=id&_order=desc', true);
  request.send();
}


loadData();

btn.addEventListener('click', (e) => {
  const request = new XMLHttpRequest();
  e.preventDefault();
  request.open('POST', 'https://lidemy-book-store.herokuapp.com/posts', true);
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  request.send(`content=${encodeURIComponent(newData.value)}`);
  const newRequest = new XMLHttpRequest();

  // loading
  loadData(newRequest);
  newData.value = '';
});
