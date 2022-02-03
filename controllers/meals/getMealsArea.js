const data = require('../../data.json');

function getMealsAreaController(req, res) {
    const meal = data.meals.filter((meal) => {return meal.strArea == req.params.strArea});
    res.status(201).json(meal[0]);
}

module.exports = getMealsAreaController;