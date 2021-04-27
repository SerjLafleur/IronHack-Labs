const mongoose = require('mongoose')
const coasterSchema = mongoose.Schema({

    name: String,
    description: String,
    inversions: Number,
    length: Number,
    active: Boolean,
    park: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Park'
    }
})

const Coaster = mongoose.model('Coaster', coasterSchema)
module.exports = Coaster