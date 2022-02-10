const data = require('../../data.json');

function getCategories(req, res) {
    const categories = data.category;
    const info = { data: { categories } }
    res.json(info)
}

module.exports = getCategories