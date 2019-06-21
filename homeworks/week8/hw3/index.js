const request = new XMLHttpRequest();
const content = document.querySelector('.content');

request.open('GET',
  'https://api.twitch.tv/kraken/streams/?client_id=8t78srcyezm66lv9q0t44ybqsn8pbh&game=League%20of%20Legends&limit=20', true);
request.send();

request.onload = () => {
  if (request.status >= 200 && request.status < 400) {
    const json = JSON.parse(request.responseText);
    const result = json.streams;
    for (let i = 0; i < result.length; i += 1) {
      const div = document.createElement('div');
      div.classList.add('textelement');
      div.innerHTML = `
      <a href =${result[i].channel.url} target='_blank' class='url'>
      <img src=${result[i].preview.medium} class='cover'>
      </a>
      <div class='streamer'>
      <img src=${result[i].channel.logo} class='logo'>
      <ul>
      <li class='name'>${result[i].channel.display_name}
      </li>
      </ul>
      </div>`;
      content.appendChild(div);
    }
  }
};
