var router = require('express').Router();

router.use('/1/categories', require('./categories'));
router.use('/1/meals', require('./meals'));

module.exports = router;