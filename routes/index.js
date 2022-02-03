var router = require('express').Router();

router.use('/categories', require('./categories'));
router.use('/meals', require('./meals'));

module.exports = router;