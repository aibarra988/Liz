const pizza = require('../models/pizza')

const pizzaService = {
    getAllPizzas: () => {
        return pizza.getPizzas()
    }
}

module.exports = pizzaService