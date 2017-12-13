const Eris = require('eris');
const _ = require('lodash');
const data = require('./lib/data')();
const util = require('./lib/util');
const BotDb = require('./lib/bot-db');

const BOT_TOKEN = process.env.BOT_TOKEN || '';
const bot = new Eris.CommandClient(BOT_TOKEN, {}, {
  description: 'motoo bot',
  owner: 'somebody',
  prefix: '!',
});

const dbPath = process.env.DB_PATH || '';
const botDb = new BotDb(dbPath);

bot.on('ready', () => {
  console.log('Ready!');
});

bot.on('messageCreate', async (msg) => {
  const words = await botDb.getAllWords();
  words.forEach((word) => {
    if (msg.content.indexOf(word.keyword) > -1) {
      const responses = word.response.split(',');
      const res = responses.length === 1 ? word.response : _.sample(responses);
      bot.createMessage(msg.channel.id, res);
    }
  });
});

bot.on('presenceUpdate', async (other, oldPresence) => {
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
    // ユーザテーブルに追加
    await botDb.insertUser(other.user.id, userName);
  } else if (oldPresence.game) {
    // ゲームを辞めたとき
    const gameName = oldPresence.game.name;
    const startTime = Math.floor(oldPresence.game.timestamps.start / 1000);
    const now = Math.floor(new Date().getTime() / 1000);
    // const playTime = util.sec2hour(Math.floor((new Date().getTime() - startTime) / 1000));
    // msg = `${userName} が ${oldPresence.game.name} をやめました\nプレイ時間：${playTime.hour}時間${playTime.min}分${playTime.sec}秒`;
    const hours = new Date().getHours();
    if (_.inRange(hours, 4) || hours > 22) {
      msg = `<@${other.user.id}> あったかい風呂入ってあったかくして寝てください またね おやすみ バイバイ`;
      bot.createMessage(textChannel.id, msg);
    }
    // プレイログを追加
    await botDb.insertPlayLog(other.user.id, gameName, startTime, now, now - startTime);
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
//   const textChannel = oldChannel.guild.channels.find((channel) => channel.type === 0);
//   const msg = `${member.username} が通話をやめました`;
//   bot.createMessage(textChannel.id, msg);
// });

bot.connect();
