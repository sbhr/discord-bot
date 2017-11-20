const express = require('express');

const router = express.Router();
const index = require('../controllers/index');

/* GET home page. */
router.get('/', index.getIndex);
router.get('/detail', index.getDetail);

router.post('/post', index.postWord);
router.post('/delete', index.deleteWord);
router.post('/update', index.updateWord);

module.exports = router;
