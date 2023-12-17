const express = require('express');
const dotenv = require('dotenv')
const connectDb = require("./config/db")
const cors = require('cors')

const app = express()
app.use(cors())
const port = process.env.PORT || 3000
dotenv.config()
connectDb()

app.use(express.json({ extended: true })); // Body parser

const prices = require('./routes/prices')
app.use('/prices',prices)

const login = require('./routes/login')
app.use('/login',login)

app.listen(port, () => {
    console.log(`Server running on ${port}`);
})