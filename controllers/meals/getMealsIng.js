const data = require('../../data.json');

function getMealsIngController(req, res) {
    const meal = data.meals.filter((meal) => {return meal.strIngredient1 == req.params.strIngredient1});
    res.status(201).json(meal[0]);
}

module.exports = getMealsIngController;