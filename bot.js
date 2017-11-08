const Eris = require('eris');
const _ = require('lodash');
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

bot.registerCommand('music', (msg, args) => _.sample(data.musicList), {
  description: '俺の歌をランダムに流すよ',
  // usage: '!music と打てばわかる',
});

bot.registerCommand('message', (msg, args) => _.sample(data.messages), {
  description: '俺の言いたいこと、伝えたいこと',
});

bot.registerCommand('playstyle', (msg, args) => _.sample(data.playstyle), {
  description: '俺が考えた最強の戦術',
});

bot.registerCommand('img', (msg, args) => _.sample(data.img), {
  description: '照れるな',
});

bot.registerCommand('bleach', (msg, args) => {
  const d = _.sample(data.bleach);
  return `${d.img}\n${d.poem}`;
}, {
  description: '俺も好きなんだよ、BLEACH',
});

bot.connect();
