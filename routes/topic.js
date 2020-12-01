let controller = require('../controller/index');

let express = require('express');
let router = express.Router();

router.post('/publish', controller.publishTopic);

module.exports = router;
