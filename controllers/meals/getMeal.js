const data = require('../../data.json');

function getMealController(req, res) {
    const meal = data.meals.filter((meal) => {return meal.id == req.params.id});
    res.status(201).json(meal[0]);
}

module.exports = getMealController;