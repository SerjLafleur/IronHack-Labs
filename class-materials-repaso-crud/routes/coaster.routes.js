const express = require('express')
const router = express.Router()

const Park = require('../models/park.model')
const Coaster = require('../models/coaster.model')

//New Park form render
router.get('/new', (req, res) => {

    Park.find({})
        .then(park => res.render('coasters/new-coaster', { park }))
        .catch(err => console.log('ERROR:', err))



})

//New Coaster form process

router.post('/new', (req, res) => {

    const { name, description, inversions, length, active, park } = req.body

    Coaster.create({ name, description, inversions, length, active, park })
        .then(() => res.redirect('/coasters/new'))
        .catch(err => console.log('ERROR:', err))

})

//list Coaster
router.get('/', (req, res) => {

    Coaster.find({})
        .populate('park')
        .then(coaster => res.render('coasters/coasters-index', { coaster }))
        .catch(err => console.log('ERROR:', err))
})


//Detail Coaster
router.get('/:coaster_id', (req, res) => {

    const id = req.params.coaster_id

    Coaster.findById(id)
        .populate('park')
        .then(fullDetail => res.render('coasters/coaster-details', fullDetail))
        .catch(err => console.log('ERROR:', err))

})
// Deletel id Coaster
router.post('/:coaster_id/delete', (req, res) => {

    const id = req.params.coaster_id

    Coaster.findByIdAndRemove(id)
        .then(() => res.redirect('/coasters'))
        .catch(err => console.log('ERROR:', err))

})


//Edit Coaster

router.get('/edit/:coaster_id', (req, res) => {

    const id = req.params.coaster_id

    Coaster.findById(id)
        .populate('park')
        .then(fullCoasterEdit => res.render('coasters/edit-coaster', fullCoasterEdit))
        .catch(err => console.log('ERROR:', err))
})


router.post('/:coaster_id', (req, res) => {

    const id = req.params.coaster_id

    const { name, description, inversions, length, active, park } = req.body

    Coaster.findByIdAndUpdate(id, { name, description, inversions, length, active, park })
        // .populate('park')
        .then(() => res.redirect("/coasters/edit/:coaster_id"))
        .catch(err => console.log(('ERROR:', err)))
})



module.exports = router