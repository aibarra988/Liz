const connection = require('./connection')

const orm = {
    selectAll() {
        return new Promise((resolve, reject) => {
            const queryString = `SELECT * FROM pizza`
            connection.query(queryString, (err, data) => {
                if (err) {
                    reject(err)
                }
                resolve(data)
            })
        })
    },

    insertOne(name, price) {
        return new Promise((resolve, reject) => {
            const queryString = `INSERT INTO pizza (name, price) (?, ?)`
            connection.query(queryString, [name, price], (err, data) => {
                if (err) {
                    reject(err)
                }
                resolve(data)
            })
        })
    },

    updateOne(id, price) {
        return new Promise((resolve, reject) => {
            const queryString = `UPDATE pizza SET price = ? WHERE id = ?`
            connection.query(queryString, [id, price], (err, data) => {
                if (err) {
                    reject(err)
                }
                resolve(data)
            })
        })
    },

    delete(id) {
        return new Promise((resolve, reject) => {
            const queryString = `DELETE FROM pizza WHERE id = ?`
            connection.query(queryString, [id], (err, data) => {
                if (err) {
                    reject(err)
                }
                resolve(data)
            })
        })
    }

}

module.exports = orm