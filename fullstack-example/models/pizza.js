const orm = require('../config/orm')

const pizza = {
    getPizzas: () => {
        return orm.selectAll()
    },
    //
    addPizza: (name) => {
        return orm.insertOne(name)
    },
    deletePizza: (id) => {
        return orm.delete(id)
    },
    // 
    // updatePizzaPrice: (id, price) => {
    //     return orm.updateOne()
    // },
    // eatPizza: (id) => {
    //     return orm.updateOne()
    // }
}

module.exports = pizza