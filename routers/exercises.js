const router = require('../node_modules/express').Router()
let Exercise = require('../models/exercise.model')

router.route('/')
    .get((req, res) => {
        Exercise.find()
            .then(exercises => res.json(exercises))
            .catch(err => res.status(400).json(err))
    })
    .delete((req, res) => {
        Exercise.deleteMany()
            .then(() => res.json('Successfully deleted all Exercises'))
            .catch(err => res.status(400).json(err))
        })

router.route('/add').post((req, res) => {
    const username = req.body.username
    const description = req.body.description
    const duration = req.body.duration
    const date = req.body.date

    const newExercise = Exercise({
        username,
        description,
        duration,
        date
    })

    newExercise.save()
        .then(() => res.json('Exercise added successfully!'))
        .catch(err => res.status(400).json(err))
})

module.exports = router