let express = require('express');
let router = express.Router();
let view = require('../../controller/view/view.js');

router.get('/', view.index);

module.exports = router;