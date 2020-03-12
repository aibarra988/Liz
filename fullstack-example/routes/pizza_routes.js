const pizzaService = require('../service/pizza_service')
const router = require('express').Router()

router.get("/pizza_menu", (req, res) => {
    pizzaService.getAllPizzas()
        .then((data) => {
            res.json(data)
        })
})



module.exports = router