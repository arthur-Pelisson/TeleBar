const Product = require('../model/product.model');

//Creation du products
exports.create = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    Product.create(
        new Product(req.body),
        req.body.companieId,
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: 'Not enought information Products'
                    });
                } else {
                    res.status(500).send({
                        message: "Error creating Products"
                    });
                }
            } else res.send(data);
        }
    );
}
//Modification du products
    exports.update = (req, res) => {
        // Validate Request
        if (!req.body) {
            res.status(400).send({
                message: "Content can not be update!"
            });
        }
        console.log(req.params)
        console.log(req.body)

        Product.updateById(
            req.params.id,
            new Product(req.body),
            (err, data) => {
                if (err) {
                    if (err.kind === "not_found") {
                        res.status(404).send({
                            message: 'Not Possible to update Products'
                        });
                    } else {
                        res.status(500).send({
                            message: "Error update Products"
                        });
                    }
                } else res.send(data);
            }
        );
    }

    //suppression du products
    exports.delete = (req, res) => {
        // Validate Request
        if (!req.body) {
            res.status(400).send({
                message: "Content can not be delete!"
            });
        }

        Product.delete(
            req.params.id,
            (err, data) => {
                if (err) {
                    if (err.kind === "not_found") {
                        res.status(404).send({
                            message: 'Not Possible to delete Products'
                        });
                    } else {
                        res.status(500).send({
                            message: "Error delete Products"
                        });
                    }
                } else res.send(data);
            }
        );
    }


// Retrieve all Products from the database.
exports.findAllCompanieProduct = (req, res) => {
    Product.findAllCompanieProduct(req.params.companieId,(err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Products."
            });
        else res.send(data);
    });
};

//Selection d'un produit par l'Id
exports.findById = (req, res, next) => {
    Product.findById(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Products`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Products"
                });
            }
        } else res.send(data);
    });
};

