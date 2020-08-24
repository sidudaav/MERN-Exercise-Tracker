const router = require('../node_modules/express').Router()
let User = require('../models/user.model')

router.route('/')
    .get((req, res) => {
        User.find()
            .then(users => res.json(users))
            .catch(err => res.status(400).json(err))
    })
    .delete((req, res) => {
        User.deleteMany()
            .then(() => res.json('Successfully deleted all users'))
            .catch(err => res.status(400).json(err))
    })

router.route('/add').post((req, res) => {
    const username = req.body.username

    newUser = User({ username })
    newUser.save()
        .then(res.json('User addded successfuly'))
        .catch(err => res.status(400).json(err))
})

module.exports = router