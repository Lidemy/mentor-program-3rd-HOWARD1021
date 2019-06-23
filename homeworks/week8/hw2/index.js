const request = new XMLHttpRequest();
const table = document.querySelector('.table');
const newdata = document.querySelector('.form__textarea');
const btn = document.querySelector('.btn');
// 先新增一個新的div 跟class 接著加入 id 與 content的值 最後append回去table//
request.open('GET', 'https://lidemy-book-store.herokuapp.com/posts?_limit=20&_sort=id&_order=asc', true);
request.onload = () => {
  const json = JSON.parse(request.responseText);
  for (let i = 0; i < json.length; i += 1) {
    const p = document.createElement('div');
    p.classList.add('message-itmes');
    p.innerHTML = `${json[i].id} 樓 :${json[i].content}`;
    table.appendChild(p);
  }
};
request.send();
// 新增一個留言,//
btn.onclick = () => {
  request.open('POST', 'https://lidemy-book-store.herokuapp.com/posts', true);
  request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  request.send(`content=${newdata.value}`);
  request.onload = () => {
    if (request.status >= 200 && request.status < 400) {
      const text = document.createElement('div');
      text.innerText = `${newdata.value}`;
    }
  };
};
