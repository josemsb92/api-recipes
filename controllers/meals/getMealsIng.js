const data = require('../../data.json');

function getMealsIngController(req, res) {
    const meal = data.meals.filter((meal) => {return });
    res.status(201).json(meal[0]);
}

module.exports = getMealsIngController;