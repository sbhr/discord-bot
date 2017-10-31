const Eris = require('eris');

const BOT_TOKEN = process.env.BOT_TOKEN || '';
const bot = new Eris(BOT_TOKEN);

const musicList = [
  'https://www.youtube.com/watch?v=FPLxRe4ho_A', // 記念撮影
  'https://www.youtube.com/watch?v=6m3A1MP_gbU', // リボン
  'https://www.youtube.com/watch?v=bRWQckbQ9tQ', // アンサー
  'https://www.youtube.com/watch?v=plXjYiRcBtA', // GO
  'https://www.youtube.com/watch?v=jVOpvX3tDN0', // アリア
];


bot.on('ready', () => {
  console.log('Ready!');
});

bot.on('messageCreate', (msg) => {
  if (msg.content.toLowerCase().indexOf('bump') > -1) {
    const retMsg = `聞いてくれ\n${musicList[Math.floor(Math.random() * (musicList.length + 1))]}`;
    bot.createMessage(msg.channel.id, retMsg);
  } else if(msg.content.indexOf('おえかき') > -1) {
    const retMsg = 'お絵かきの森はここだよ\nhttp://casual.hangame.co.jp/oekaki/index.nhn'
    bot.createMessage(msg.channel.id, retMsg);
  }
});

bot.connect();
