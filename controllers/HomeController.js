const HomeModel = require('../models/HomeModel')

const HomeController = {
    async HomeList(req, res) {
        req.session.item = req.session.item ? req.session.item : []
        const home = await HomeModel.getAllItems()
        res.render('home', { home, item: req.session.item })
    }
}

module.exports = HomeController