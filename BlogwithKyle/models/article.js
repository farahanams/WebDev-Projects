const mongoose = require('mongoose')

// Schema
const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    markdown: {
        type: String,
        required: true
    },

})

module.exports = mongoose.model('Article', articleSchema)