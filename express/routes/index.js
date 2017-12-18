const express = require('express');

const router = express.Router();
const index = require('../controllers/index');

/* GET home page. */
router.get('/allWords', index.getAllWords);
router.get('/word', index.getWord);

router.post('/post', index.postWord);
router.post('/delete', index.deleteWord);
router.post('/update', index.updateWord);

module.exports = router;
