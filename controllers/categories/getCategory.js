const data = require('../../data.json');

function getCategory (req, res) {
    
    mealsByCategory = data.category.filter( category => {category.strCategory == req.params.strCategory;console.log(category.strCategory); });
    res.json(mealsByCategory);
}

module.exports = getCategory