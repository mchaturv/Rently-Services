const Property = require('../models/property');

exports.postAddProduct = (req, res, next) => {
    /*
     * Add properties
     */
};

exports.getEditProduct = (req, res, next) => {
  /*
   * Get Properties for Editing
   */
};

exports.postEditProperty = (req, res, next) => {
  /*
   *Edit Properties
   */
};

exports.getProducts = (req, res, next) => {
  Property.find()
  .then(products => {
    res.status(200).json(products);
  })
  .catch(err => console.log(err));
};

exports.postDeleteProduct = (req, res, next) => {
  /*
   *Deleting property
   */
};
