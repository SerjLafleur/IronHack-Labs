const express = require('express')
const router = express.Router()


const Park = require('../models/park.model')



//New Park form render
router.get('/new', (req, res) => res.render('parks/new-park'))


//New Park form process

router.post('/new', (req, res) => {

    const { name, description, active } = req.body

    Park.create({ name, description, active })
        .then(() => res.redirect('/parks/new'))
        .catch(err => console.log('ERROR:', err))

})

module.exports = router