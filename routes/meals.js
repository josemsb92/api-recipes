var router = require('express').Router();

router.get('/', require('../controllers/meals/getByQueryParams'));
router.get('/:id', require('../controllers/meals/getMealById'));

module.exports = router;