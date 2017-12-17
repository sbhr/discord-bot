const BotDb = require('../../lib/bot-db');

const dbPath = process.env.DB_PATH || '';
const botDb = new BotDb(dbPath);

const getAllWords = async (req, res, next) => {
  try {
    const words = await botDb.getAllWords();
    res.status(200).json(words);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getWord = async (req, res, next) => {
  const id = req.query.id;

  try {
    const word = await botDb.getWord(id);
    res.status(200).json(word);
  } catch (err) {
    res.status(500).json(err);
  }
};

const postWord = async (req, res, next) => {
  const keyword = req.body.keyword;
  const response = req.body.response;

  try {
    await botDb.insertWord(keyword, response);
    res.status(200).end();
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteWord = async (req, res, next) => {
  const id = req.body.id;

  try {
    await botDb.deleteWord(id);
    res.status(200).end();
  } catch (err){
    res.status(500).json(err);
  }
};

const updateWord = async (req, res, next) => {
  const id = req.body.id;
  const keyword = req.body.keyword;
  const response = req.body.response;

  try {
    await botDb.updateWord(id, keyword, response);
    res.status(200).end();
  } catch (err){
    res.status(500).json(err);
  }
};

module.exports = {
  getAllWords,
  getWord,
  postWord,
  deleteWord,
  updateWord,
};
