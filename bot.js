const Eris = require('eris')
const _ = require('lodash')
const moment = require('moment')
const data = require('./lib/data')()
const BotDb = require('./lib/bot-db')

const BOT_TOKEN = process.env.BOT_TOKEN || ''
const bot = new Eris.CommandClient(BOT_TOKEN, {}, {
  description: 'motoo bot',
  owner: 'somebody',
  prefix: '!'
})

const dbPath = process.env.DB_PATH || ''
const botDb = new BotDb(dbPath)

bot.on('ready', () => {
  console.log('Ready!')
})

bot.on('messageCreate', async (msg) => {
  if (msg.author.username !== 'motoo') {
    const words = await botDb.getAllWords()
    words.forEach((word) => {
      if (msg.content.indexOf(word.keyword) > -1) {
        const responses = word.response.split(',')
        const res = responses.length === 1 ? word.response : _.sample(responses)
        bot.createMessage(msg.channel.id, res)
      }
    })
  }
})

bot.on('presenceUpdate', async (other, oldPresence) => {
  const textChannel = other.guild.channels.find((channel) => channel.type === 0)
  const userName = other.user.username
  const messages = await bot.getMessages(textChannel.id, 10)
  const oneHourAgo = moment().subtract(1, 'hour').format('X')

  if (!textChannel || !userName) return

  let msg
  if (other.game) { // ゲームが始まったとき
    const gameName = other.game.name || ''

    // １時間以内にPUBGの発言をしたかどうか
    const doneAnnounce = _
      .chain(messages)
      .filter({
        author: { username: 'motoo' },
        content: 'PUBGの時間だ'
      })
      .filter(msg => Math.floor(msg.timestamp / 1000) > oneHourAgo)
      .value().length
    if (!doneAnnounce && gameName === "PLAYERUNKNOWN'S BATTLEGROUNDS") {
      bot.createMessage(textChannel.id, 'PUBGの時間だ')
    }
    try {
      // ユーザテーブルに追加
      // TODO: 同じユーザなら挿入しないように
      await botDb.insertUser(other.user.id, userName)
    } catch (err) {
      // TODO: logging
      console.error(err)
    }
  } else if (oldPresence.game) { // ゲームを辞めたとき
    const gameName = oldPresence.game.name
    const startTime = Math.floor(oldPresence.game.timestamps.start / 1000)
    const now = moment().format('X')
    msg = `<@${other.user.id}> あったかい風呂入ってあったかくして寝てください またね おやすみ バイバイ`
    const doneOyasumi = _
      .chain(messages)
      .filter({
        content: msg
      })
      .filter(msg => Math.floor(msg.timestamp / 1000) > oneHourAgo)
      .value().length
    const hour = moment().format('H')
    if (!doneOyasumi && (_.inRange(hour, 4) || hour > 22)) {
      msg = `<@${other.user.id}> あったかい風呂入ってあったかくして寝てください またね おやすみ バイバイ`
      bot.createMessage(textChannel.id, msg)
    }
    try {
      // プレイログを追加
      await botDb.insertPlayLog(other.user.id, gameName, startTime, now, now - startTime)
    } catch (err) {
      // TODO: logging
      console.error(err)
    }
  }
})

bot.registerCommand('music', (msg, args) => _.sample(data.musicList), {
  description: '俺の歌をランダムに流すよ'
})

bot.registerCommand('message', (msg, args) => _.sample(data.messages), {
  description: '俺の言いたいこと、伝えたいこと'
})

bot.registerCommand('playstyle', (msg, args) => _.sample(data.playstyle), {
  description: '俺が考えた最強の戦術'
})

bot.registerCommand('img', (msg, args) => _.sample(data.img), {
  description: '照れるな'
})

bot.registerCommand('bleach', (msg, args) => {
  const d = _.sample(data.bleach)
  return `${d.img}\n${d.poem}`
}, {
  description: '俺も好きなんだよ、BLEACH'
})

bot.on('voiceChannelJoin', (member, newChannel) => {
  const textChannel = newChannel.guild.channels.find((channel) => channel.type === 0)
  const msg = `${member.username} が通話をはじめました`
  bot.createMessage(textChannel.id, msg)
})

// bot.on("voiceChannelLeave", (member, oldChannel) => {
//   const textChannel = oldChannel.guild.channels.find((channel) => channel.type === 0);
//   const msg = `${member.username} が通話をやめました`;
//   bot.createMessage(textChannel.id, msg);
// });

bot.connect()
