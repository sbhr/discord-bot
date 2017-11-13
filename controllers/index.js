const BotDb = require('../lib/bot-db');

const dbPath = process.env.DB_PATH || '';
const botDb = new BotDb(dbPath);

const getIndex = async (req, res, next) => {

  const words = await botDb.getAllWords();

  res.render('index', {
    words,
    err : {},
    post: {},
  });
};

const postWord = async (req, res, next) => {
  const keyword = req.body.keyword;
  const response = req.body.response;
  const err = {};
  const post = {};

  if (keyword && response) {
    await botDb.insertWord(keyword, response);
  } else {
    err. keyword = !keyword;
    err.response = !response;
    post.keyword = keyword;
    post.response = response;
  }

  const words = await botDb.getAllWords();

  res.render('index', {
    words,
    err,
    post,
  });
};

module.exports = {
  getIndex,
  postWord,
};
