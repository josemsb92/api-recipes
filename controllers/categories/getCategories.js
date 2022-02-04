const data = require('../../data.json');

function getCategories (req, res) {
    console.log(req.query);
    categories = data.category;
    res.json(categories)
}

module.exports = getCategories