const express = require('express');
const controller = require('../controllers/friendController');
const router = express.Router();

router.get('/filter', controller.filterFriends);
router.get('/info', controller.getHeaders);
router.get('/:id', controller.getFriend);
router.put('/:id', controller.updateFriend);

module.exports = router;
