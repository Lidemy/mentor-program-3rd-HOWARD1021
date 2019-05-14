const request = require('request');

const clientID = '8t78srcyezm66lv9q0t44ybqsn8pbh';

request({
  url: 'https://api.twitch.tv/helix/games/top',
  method: 'GET',
  headers: {
    'Client-ID': clientID,
  },
}, (error, response, body) => {
  const obj = JSON.parse(body);
  obj.data.forEach((value) => {
    console.log(`${value.id} ${value.name}`);
  });
});
