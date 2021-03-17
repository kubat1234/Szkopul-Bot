// const Discord = require('discord.js');
// require('dotenv').config();

// const client = new Discord.Client();

// const env = process.env
 
// client.on('ready', () => {
//   console.log(`Logged in as ${client.user.tag}!`);
// });
 
// client.on('message', msg => {
//   if (msg.content === 'ping') {
//     msg.reply('pong');
//   }
// });
 
// client.login(env.TOKEN);
const axios = require('axios');

axios.get('https://szkopul.edu.pl/c/2015-grupa-poczatkujaca/ranking/')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  // .catch(function (error) {
  //   // handle error
  //   console.log(error);
  // })
  // .then(function () {
  //   // always executed
  // });