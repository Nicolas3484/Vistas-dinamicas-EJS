const menu = require('../../database/menu.json')

module.exports = (req, res) => {
    menuId = req.params.id,
    menuFind = menu.find((menu) => menu.id === +(menuId))
    res.render('detailMenu', {menuFind})
}