/* eslint-env jquery */

// render
let list = [];
function render() {
  $('ul').empty();
  $('.add-todo').val('');
  // map 與 for
  for (let i = 0; i < list.length; i += 1) {
    $('ul').append(
      `<li class="list-group-item d-flex justify-content-between align-items-center ${list[i].isDone ? 'checked' : ''}" data-id="${i}">
    <div class='inputcheck'>
    <input type="checkbox" name="" value="" class = 'inputcheckout' ${list[i].isDone ? 'checked' : ''}>
    <span class ='item-name ' >${list[i].content}</span>
    </div>
    <button type="button" class="close" aria-label="Close">x  
</button>
</ul>
</li>`,
    );
  }
}
// 新增
function addTodo(todo) {
  const obj = {
    dataId: '',
    content: todo,
    isDone: false,
  };
  list.push(obj);
  render();
}
// 刪除
// ${id}
function removeTodo(id) {
  list[id].dataId = id;
  list = list.filter(item => item.dataId !== id);
  render();
}


// dom
$(document).ready(() => {
  $('.add-todo').keydown((e) => {
    const newtask = $('.add-todo').val();
    if (e.key === 'Enter') {
      addTodo(newtask);
    }
    // $('add-todo').val() = ''; 不清楚要怎麼將輸入的值刪掉
  });
  /* 我們一樣 使用 jquery
    事件代理我們的目標$(e.target)
    接著 使用 if 使用 hasclass 抓取 裡面的資料中含有 close 值
    ,
    => sibling 的 html
    宣告 delete-dask  等於我們剛剛抓到含有 btn-delete 的值
    接著我們 使用 filter
    */
  $('.todo-list').on('change', '.inputcheckout', (e) => {
    const element = $(e.target);
    const id = $(e.target).closest('li').attr('data-id');
    if (element.prop('checked')) {
      list[id].isDone = true;
    } else {
      list[id].isDone = false;
    }
    render();
  });


  $('.test').on('click', '.close', (e) => {
    const id = $(e.target).closest('li').attr('data-id');
    removeTodo(id);
  });
});
