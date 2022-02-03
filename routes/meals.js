var router = require('express').Router();

router.get('/:id', require('../controllers/meals/getMeal'));
router.get('/:name', require('../controllers/meals/getMealByName'));
router.get('/:area', require('../controllers/meals/getMealsArea'));
router.get('/:ingredient', require('../controllers/meals/getMealsIng'));

module.exports = router;