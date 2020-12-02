let controller = require('../controller/index');

let express = require('express');
let router = express.Router();

router.post('/publish', controller.publishTopic);
router.post('/get', controller.getTopic);

module.exports = router;
