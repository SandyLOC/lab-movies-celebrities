//  Add your code here
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Movie = new Schema({
    title: String,
    genre: String,
    plot: String,
    cast: [{
        type: Schema.Types.ObjectId,
        ref: 'Celebrity'
    }]
})

module.exports = mongoose.model("Movie", Movie)