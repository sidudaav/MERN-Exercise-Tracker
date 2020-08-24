require('./node_modules/dotenv/types').config()
const express = require('./node_modules/express')
const mongoose = require('mongoose')
const cors = require('./node_modules/cors/lib')
const logger = require('./node_modules/morgan')

const app = express()
app.use(cors())
app.use(express.json())
app.use(logger('dev'))

const uri = process.env.ATLAS_URI || "mongodb://user:sidiscool123@ds161764.mlab.com:61764/heroku_wqqzb9rx"

mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true})

connection = mongoose.connection
connection.once('open', () => console.log(`Successfully connected to MongoDB`))

const exercisesRouter = require('./routers/exercises')
const usersRouter = require('./routers/users')

app.use('/exercises', exercisesRouter)
app.use('/users', usersRouter)

const PORT = process.env.PORT || 5000

if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'))
}

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))