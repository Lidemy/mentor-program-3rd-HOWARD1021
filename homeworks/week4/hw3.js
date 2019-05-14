const request = require('request');
const process = require('process');

switch (process.argv[2]) {
  case 'list':
    request('https://lidemy-book-store.herokuapp.com/books?_limit=20',
      (error, response, body) => {
        const obj = JSON.parse(body);
        obj.forEach((item) => {
          console.log(`${item.id} ${item.name}`);
        });
      });
    break;

  case 'read':
    request(`https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
      (error, response, body) => {
        const obj = JSON.parse(body);
        console.log(obj.name);
      });
    break;

  case 'delete':
    request.delete(`https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
      () => {
        console.log(`刪除 id 為 ${process.argv[3]} 的書籍`);
      });
    break;

  case 'create':
    request.post(
      {
        url: 'https://lidemy-book-store.herokuapp.com/books/',
        form: {
          id: '',
          name: process.argv[3],
        },
      },
      () => {
        console.log(`新增一本名為 ${process.argv[3]} 的書`);
      },
    );
    break;

  case 'update':
    request.patch(
      {
        url: `https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
        form: {
          name: process.argv[4],
        },
      },
      () => {
        console.log(`更新 id 為 ${process.argv[3]} 的書名為 ${process.argv[4]}`);
      },
    );
    break;

  default:
    console.log('請輸入正確的指令噢');
    break;
}
