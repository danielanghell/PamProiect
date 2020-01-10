const Product = require('../models/product.model');

//Simple version, without validation or sanitation
exports.register = function (req, res) {
    res.sendFile('C:/git/PamProiect/tvseries/src/app/shared-components/register' + '/register.component.html');
};


exports.product_create = function (req, res) {
    let product = new Product(
        {
            username: req.body.username,
            password: req.body.password
        }
    );

    product.save(function (err) {
        if (err) {
            return (err);
        }
        res.send('Product Created successfully')
    })
};

exports.product_details = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};


exports.product_update = function (req, res) {
    Product.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, product) {
        if (err) return next(err);
        res.send('Product udpated.');
    });

};

exports.product_delete = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
}