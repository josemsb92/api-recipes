const data = require('../../data.json');

function getByCategory(request, response) {
        const meal = data.meals.filter((meal) => {
        if (meal.strCategory == request.query.strCategory) {
            return meal;
        }
        if (meal.strArea == request.query.strArea) {
            return meal;
        }
        if (meal.strIngredient1 == request.query.strIngredient1) {
            return meal;
        }
    }    
)

response.status(200).json(meal);}

module.exports = getByCategory;
