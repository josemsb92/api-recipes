const data = require('../../data.json');

function getMealById(req, res) {
    //console.log(data.meals)
    const meals = data.meals.filter((meal) => { return meal.idMeal == req.params.id; });
    const info = { data: { meals } }
    console.log(info)
    res.status(200).json(info);
}

module.exports = getMealById;