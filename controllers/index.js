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

const deleteWord = async (req, res, next) => {
  const id = req.body.id;

  try {
    await botDb.deleteWord(id);
    res.status(200).end();
  } catch (e){
    res.status(500).end();
  }

};

const getDetail = async (req, res, next) => {
  const id = req.query.id;
  const response = req.body.response;

  const word = await botDb.getWord(id);

  res.render('detail', {
    word,
    err : {},
  });
};

const updateWord = async (req, res, next) => {
  const id = req.body.id;
  const keyword = req.body.keyword;
  const response = req.body.response;
  const err = {};
  const word = {};

  if (keyword && response) {
    await botDb.updateWord(id, keyword, response);
    const words = await botDb.getAllWords();

    res.render('index', {
      words,
      err : {},
      post: {},
    });
  } else {
    word.id = id;
    err. keyword = !keyword;
    err.response = !response;
    word.keyword = keyword;
    word.response = response;

    res.render('detail', {
      word,
      err,
    });
  }
};

module.exports = {
  getIndex,
  postWord,
  deleteWord,
  getDetail,
  updateWord,
};
