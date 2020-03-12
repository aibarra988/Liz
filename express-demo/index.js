const express = require('express')

const app = express()

app.get("/", (req, res) => {
    console.log(req.query)
    res.send("hello " + req.query.name + " " + req.query.last_name)
})

app.get("/snacks/poop", (req, res) => {
    res.send("cacaccaaca")
})

app.post('/', (req, res) => {

})

app.put('/', (req, res) => {

})

app.delete("/", (req, res) => {

})


app.listen(8000, () => console.log(`Connected to port 8000`))