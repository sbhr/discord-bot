const getIndex = (req, res, next) => {
  res.render('index', { title: 'Express' });
};

module.exports = {
  getIndex,
};
