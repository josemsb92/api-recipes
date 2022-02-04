const data = require('../../data.json');

function getMealNameByController(req, res) {
    const meal = data.meals.find((meal) => {return meal.strName == req.params.strName});
    res.status(200).json(meal[0]);
}

module.exports = getMealNameByController;