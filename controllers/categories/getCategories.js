const data = require('../../data.json');

function getCategories (req, res) {
    categories = data.category;
    res.json(categories)
}

module.exports = getCategories