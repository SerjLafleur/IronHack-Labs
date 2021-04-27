const mongoose = require('mongoose')
const parkSchema = mongoose.Schema({
    name: String,
    description: String,
    active: Boolean
})


const Park = mongoose.model('Park', parkSchema)
module.exports = Park