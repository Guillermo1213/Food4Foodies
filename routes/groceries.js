const express = require('express')
const router = express.Router()
const User = require('../database/models/user')

router.post(
    '/add',
    function (req, res) {
        console.log('routes/groceries.js, adding ');

        const { groceries } = req.body

        User.updateOne({ groceries: groceries }, () => {
            const addGroceries = User({
                groceries: groceries
            })
            addGroceries.save((err, addedGroceries) => {
                if (err) return res.json(err)
                res.json(addedGroceries)
            })
        })
    })

module.exports = router