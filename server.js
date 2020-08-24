require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const logger = require('morgan')

const app = express()
app.use(cors())
app.use(express.json())
app.use(logger('dev'))

const uri = process.env.ATLAS_URI || "mongodb://user:sidiscool123@ds021462.mlab.com:21462/heroku_gr9trmnr"

mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true})

connection = mongoose.connection
connection.once('open', () => console.log(`Successfully connected to MongoDB`))

const exercisesRouter = require('./routers/exercises')
const usersRouter = require('./routers/users')

app.use('/exercises', exercisesRouter)
app.use('/users', usersRouter)

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build/index.html'), function(err) {
        if (err) {
            res.status(500).send(err)
        }
    })
})

const PORT = process.env.PORT || 5000

if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'))
}

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))