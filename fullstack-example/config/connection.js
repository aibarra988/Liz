const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    port: 8889,
    user: "root",
    password: "root",
    database: "pizza_db"
})

connection.connect((err) => {
    if (err) {
        console.error("Error connecting to the database", err)
        return
    }
    console.log(`Connected to DB as id ${connection.threadId}`)
})

module.exports = connection