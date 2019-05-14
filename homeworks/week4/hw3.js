const request = require('request');
const process = require('process');

if (process.argv[2] === 'list') {
  request('https://lidemy-book-store.herokuapp.com/books?_limit=20',
    (error, response, body) => {
      const obj = JSON.parse(body);
      obj.forEach((item) => {
        console.log(`${item.id} ${item.name}`);
      });
    });
}
if (process.argv[2] === 'read') {
  request.get(`https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
    (error, response, body) => {
      const obj = JSON.parse(body);
      console.log(obj.name);
    });
}
if (process.argv[2] === 'delete') {
  request.delete(`https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
    (error, response) => {
      if (response.statusCode === 200) {
        console.log('刪除');
      } else if (response.statusCode === 404) {
        console.log('無此項目');
      } else {
        console.log(response.statusCode);
      }
    });
}
if (process.argv[2] === 'create') {
  const URL = 'https://lidemy-book-store.herokuapp.com/books';
  request.post({
    url: URL,
    name: process.argv[3],
  },
  (error, response) => {
    if (response.statusCode === 201) {
      console.log('成功新增');
    }
  });
}
if (process.argv[2] === 'update') {
  request.patch({
    url: `https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
    form: {
      name: process.argv[4],
    },
  }, (error, response) => {
    if (response.statusCode === 200) {
      console.log('成功修改');
    } else if (response.statusCode === 404) {
      console.log('查無此項目');
    } else {
      console.log(response.statusCode);
    }
  });

  if (process.argv[2] === undefined) {
    console.log('Invalid input, please try again');
  }
}
