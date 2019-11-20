/* eslint-env jquery */
/* eslint-disable camelcase */

function getMainPost(name, comment, id, create_at) {
  const mainpost = `<div class = "post">
    <input type='hidden' value='0' name='parent_id'/>
    <div class="table__style">${name}:</div>
    <div class="table__style">${comment}</div>
    <div class="table__style">發佈時間:${create_at}</div>
    <div class='fucntion'>    
    <button class='btn message__delete btn-danger' data-id=${id}>delete</button>
    <button class='btn btn-light'><a href='./update_post.php?id=${id}'> Edit </a></button>
    </div>
    <div class='sub_comments'>   
    <form method = 'POST' action='./handle_add.php' >
    <input type='hidden' value=${id} name='parent_id'/>
     <textarea class='textarea_set' id='sub_post' name='comment' placeholder='Leave a message' style= 'width:300px;height:70px'></textarea>
        <input type='submit' value='留言' class='btn btn-primary message_add''>
        </form>
    </div>
    </div>`;
  return mainpost;
}

function getSubPost(name, comment, id, create_at, parent_id) {
  const subpost = `
    <div class='sub-post active'>
    <input type='hidden' value=${parent_id} name='parent_id'/>
    <div class='sub_commentonce'>
    <div class="table__style">${name}:</div>
    <div class="table__style">${comment}</div>
    <div class="table__style">發佈時間:${create_at}</div>
    </div>
    <button class='btn message__delete btn-danger' data-id= ${id} >delete</button>
   <button class='btn  btn-light'><a href='./update_post.php?id=${id}'> Edit </a></button>
    </div>`;
  return subpost;
}
// 刪除留言 //
$(document).ready(() => {
  $('.table').on('click', '.message__delete', (e) => {
    // eslint-disable-next-line no-restricted-globals
    if (!confirm('是否要刪除')) return;// eslint-disable-line no-alert
    const id = $(e.target).attr('data-id');

    $.ajax({
      method: 'POST',
      url: 'delete_handle.php',
      data: {
        id,
      },
    }).done((response) => {
      const msg = JSON.parse(response);
      console.log('msg:', msg);
      $(e.target).parent().hide(500);
    }).fail(() => {
      alert('delete failed');// eslint-disable-line no-alert
    });
  });
  // 新增留言$('form[name=comments]').submit(function(e){
  // $('.main').on('click', '.btn-add', function(e)
  $('.table').on('click', '.message_add', (e) => {
    e.preventDefault();
    const comment = $(e.target).find('textarea[name=comment]').val();
    const parent_id = $(e.target).find('input[name=parent_id]').val();
    const subform = $(e.target).closest('form');
    $.ajax({
      method: 'POST',
      url: 'handle_add.php',
      data: { comment, parent_id },
      success: (resp) => {
        $('.textarea_set #post').val('');
        const res = JSON.parse(resp);
        const [name, id, create_at] = [res.name, res.id, res.create_at];
        if (parent_id === '0') {
          $('.table').prepend(getMainPost(name, comment, id, create_at));
        } else {
          $('.textarea_set #sub_post').val('');
          subform.before(getSubPost(name, comment, id, create_at, parent_id));
        }
      },
    });
  });
});
// <button class='btn btn-light'><a href='./update_post.php?id=${res.id}'> Edit </a></button>
// // 寫道這時產生錯誤
// 利用 ajax 產生的刪除鍵失敗 懷疑是不是 跟
// parent('.sub-post') 這項沒有設定有相關聯
// 新進展 我用ajax 產生的 新留言 雖然不能刪除 但是會產生
// handle_add 的表單
