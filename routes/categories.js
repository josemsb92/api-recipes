var router = require('express').Router();

router.get('/', require('../controllers/categories/getCategories'));
//should return meals by a speficic category;
// router.get('/:strCategory', require('../controllers/meals/getByCategory'));

module.exports = router;