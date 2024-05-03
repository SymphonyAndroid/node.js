const mongoose = require("mongoose")
const {Schema} = require("mongoose");

const Post = mongoose.model('Post', new Schema({
    author: { type: String, required: true },
    title: { type: String, required: true },
    text: { type: String }
}));

module.exports = Post;
