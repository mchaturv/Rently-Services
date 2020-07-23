const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const faqSchema = new Schema({
    question: String,
    reply: String
});

module.exports = mongoose.model('Faqs', faqSchema);
