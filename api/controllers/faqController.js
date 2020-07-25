const Faqs = require('../models/faqModel');

exports.getFAQs = (req, res, next) => {
    Faqs.find()
        .then(faqs => {
            res.status(200).json(faqs);
        })
        .catch(err => console.log(err));
};
