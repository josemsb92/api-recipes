var router = require('express').Router();

router.get('/', require('../controllers/categories/getCategories'));

module.exports = router;