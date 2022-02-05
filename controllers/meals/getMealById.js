const data = require('../../data.json');

function getMealById(req, res) {
    //console.log(data.meals)
    const meal = data.meals.filter((meal) => {return meal.idMeal == req.params.id; });
    res.status(201).json(meal);
}

module.exports = getMealById;