const Discord = require('discord.js');
require('dotenv').config();

const client = new Discord.Client();

const env = process.env
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
 
client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});
 
client.login(env.TOKEN);