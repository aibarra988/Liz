const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const pizza_router = require("./routes/pizza_routes")
const PORT = 8000

const app = express()

// Add body-parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors())

// Use pizza_routes
app.use(pizza_router)

app.get("/", (req, res) => {
    res.send("helloo!")
})

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))

