const BotDb = require('../lib/bot-db');
const botDb = new BotDb('/Users/sbhr/git/discord-bot/db/bot.db');

const getIndex = async (req, res, next) => {

  const words = await botDb.getAllWords();

  res.render('index', {
    words,
  });
};

const postWord = async (req, res, next) => {
  const keyword = req.body.keyword;
  const response = req.body.response;

  if (keyword && response) {
    await botDb.insertWord(keyword, response);
  }

  const words = await botDb.getAllWords();

  res.render('index', {
    words,
  });
};

module.exports = {
  getIndex,
  postWord,
};
