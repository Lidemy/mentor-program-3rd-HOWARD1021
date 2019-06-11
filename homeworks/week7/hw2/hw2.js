const inputRequired = document.querySelectorAll('.input__required');
const radioRequired = document.querySelectorAll('.input__radio');
const submitForm = document.querySelector('.main__form');

// 新增提醒

function addReminder(node) {
  const target = node;
  target.closest('.container__required').style.background = '#ffd6d6';
  target.style.borderBottom = '2px solid #ea3535';
  const reminder = document.createElement('div');
  reminder.classList.add('red__line');
  reminder.classList.add('reminder');
  reminder.innerText = '必填';
  target.closest('.container__required').appendChild(reminder);
}

// 刪除提醒
function removeReminder(node) {
  const target = node;
  target.closest('.container__required').style.background = '';
  target.style.borderBottom = '2px solid#E7B41C';
  target.closest('.container__required').removeChild(target.closest('.container__required').childNodes[3]);
}

for (let i = 0; i < inputRequired.length; i += 1) {
  inputRequired[i].addEventListener('blur', (e) => {
    const { backgroundColor } = this.closest('.container__required').style;
    if (e.target.value === '' && backgroundColor === '') {
      addReminder(this);
    } else if (e.target.value !== '' && backgroundColor === 'rgb(255, 214, 214)') {
      removeReminder(this);
    }
  });
}

submitForm.addEventListener('submit', (e) => {
  let finalCheck = true;
  for (let i = 0; i < inputRequired.length; i += 1) {
    if (!inputRequired[i].value) {
      if (inputRequired[i].style.borderBottom !== 'rgb(234, 53, 53)') {
        addReminder(inputRequired[i]);
      }
      finalCheck = false;
    }
  }

  if (finalCheck) {
    const other = document.querySelector('#other');
    alert('提交成功');// eslint-disable-line no-alert
    inputRequired.forEach((element) => {
      console.log(`${element.name} : ${element.value}`);
    });
    radioRequired.forEach((element) => {
      console.log(`${element.id} : ${element.checked}`);
    });
    console.log(`other : ${other.value}`);
  } else {
    alert('提交失敗,還有欄位還沒填');// eslint-disable-line no-alert
    e.preventDefault();
  }
}, false);
