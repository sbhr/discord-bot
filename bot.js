const Eris = require('eris');
const _ = require('lodash');
const data = require('./data')();
const util = require('./util');

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

bot.on('presenceUpdate', (other, oldPresence) => {
  const textChannel = other.guild.channels.find((channel) => channel.type === 0);
  const userName = other.user.username;

  if (!textChannel || !userName) return;

  let msg;
  if (other.game) {
    // ゲームが始まったとき
    const gameName = other.game.name || '';
    if (gameName === "PLAYERUNKNOWN'S BATTLEGROUNDS") {
      bot.createMessage(textChannel.id, 'PUBGの時間だ');
    }
    // msg = gameName === "PLAYERUNKNOWN'S BATTLEGROUNDS" ?
    //   '@everyone PUBGの時間だ' :
    //   `${userName} が ${gameName}をはじめました`;
  } else if (oldPresence.game) {
    // ゲームを辞めたとき
    const gameName = oldPresence.game.name;
    const startTime = oldPresence.game.timestamps.start;
    const playTime = util.sec2hour(Math.floor((new Date().getTime() - startTime) / 1000));
    // msg = `${userName} が ${oldPresence.game.name} をやめました\nプレイ時間：${playTime.hour}時間${playTime.min}分${playTime.sec}秒`;
    if (_.inRange(new Date().getHours(), 4) || new Date().getHours() > 21) {
      msg = `<@${other.user.id}> あったかい風呂入ってあったかくして寝てください またね おやすみ バイバイ`;
      bot.createMessage(textChannel.id, msg);
    }
  }
});

bot.registerCommand('music', (msg, args) => _.sample(data.musicList), {
  description: '俺の歌をランダムに流すよ',
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

bot.on('voiceChannelJoin', (member, newChannel) => {
  const textChannel = newChannel.guild.channels.find((channel) => channel.type === 0);
  const msg = `${member.username} が通話をはじめました`;
  bot.createMessage(textChannel.id, msg);
});

// bot.on("voiceChannelLeave", (member, oldChannel) => {
//   const textChannel = newChannel.guild.channels.find((channel) => channel.type === 0);
//   const msg = `${member.username} が通話をやめました`;
//   bot.createMessage(textChannel.id, msg);
// });

bot.connect();
