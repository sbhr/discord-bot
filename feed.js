const FeedParser = require('feedparser')
const request = require('request')
const moment = require('moment')

const req = request('https://pubg.jp/feed')
const feedparser = new FeedParser({})

const webHooksUrl = process.env.WEB_HOOKS_URL || ''

const options = {
  uri: webHooksUrl,
  headers: {
    'Content-type': 'application/json'
  }
}

req.on('error', (error) => {
  // handle any request errors
  console.error(error)
})

req.on('response', function (res) {
  const stream = this // `this` is `req`, which is a stream

  if (res.statusCode !== 200) {
    this.emit('error', new Error('Bad status code'))
  } else {
    stream.pipe(feedparser)
  }
})

feedparser.on('error', (error) => {
  // always handle errors
  console.error(error)
})

feedparser.on('readable', function () {
  // This is where the action is!
  const stream = this // `this` is `feedparser`, which is a stream
  // const meta = this.meta // **NOTE** the "meta" is always available in the context of the feedparser instance
  let item

  const oneHourAgo = moment().add(-1, 'hours')
  while (item = stream.read()) { // eslint-disable-line
    if (item.date > oneHourAgo) {
      options.json = {
        content: `ポチンキ速報の更新情報をお届けするよ\n${item.link}`
      }
      request.post(options, function (error, response, body) {
        console.log(error)
      })
    }
  }
})
