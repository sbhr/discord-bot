const Eris = require('eris');
const data = require('./data')();

const BOT_TOKEN = process.env.BOT_TOKEN || '';
const bot = new Eris.CommandClient(BOT_TOKEN, {}, {
  description: 'motoo bot',
  owner: 'somebody',
  prefix: '!',
});

bot.on('ready', () => {
  console.log('Ready!');
});

bot.on('messageCreate', (msg) => {
  if(msg.content.indexOf('おえかき') > -1) {
    const retMsg = 'お絵かきの森はここだよ\nhttp://casual.hangame.co.jp/oekaki/index.nhn'
    bot.createMessage(msg.channel.id, retMsg);
  }
});

bot.registerCommand('music', (msg, args) => {
  const musicList = data.musicList;
  console.log(musicList);
  const retMsg = musicList[Math.floor(Math.random() * (musicList.length))];
  return retMsg;
}, {
  description: '俺の歌をランダムに流すよ',
  // usage: '!music と打てばわかる',
});

bot.registerCommand('message', (msg, args) => {
  const messages = data.messages;
  const retMsg = messages[Math.floor(Math.random() * (messages.length))];
  return retMsg;
}, {
  description: '俺の言いたいこと、伝えたいこと',
});

bot.connect();
