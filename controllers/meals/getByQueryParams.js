const data = require('../../data.json');

function getByCategory(request, response) {
    const meal = data.meals.filter((meal) => {
        //verifies if the cat or area exists
        let mealArea = (request.query.a) ? request.query.a : null;
        let mealCategory = (request.query.c) ? request.query.c : null;
        
        if (mealArea == meal.strArea && mealCategory == meal.strCategory) {
            return meal;
        } else if (mealArea == null && mealCategory == meal.strCategory) {
            return meal;
        } else if (mealArea == meal.strArea && mealCategory == null) {
            return meal;
        }
        if (meal.strIngredient1.includes(request.query.i)) {
            return meal;
        }
        if (meal.strMeal.includes(request.query.s)) {
            return meal
        }
        if(meal.strMeal.toLowerCase().startsWith(request.query.f)){
            return meal;
        }
    }
    )

    response.status(200).json(meal);
}

module.exports = getByCategory;
