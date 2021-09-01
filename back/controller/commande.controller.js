const Commande = require('../model/commande.model');

//Creation du products
exports.create = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "order can not be empty!"
        });
    }

    Commande.create(
        new Commande(req.body),
        req.body.userId, req.body.companieId, req.body.commandeItem,
        (err, data) => {
            if (err) {
                res.status(500).send({
                    message: "Error creating Commande"
                });
            } else res.send(data);
        }
    );
};

//Pour le User
exports.getCommande = (req, res, next) => {
    Commande.getCommande(req.params.userid, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found commande`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving commande "
                });
            }
        } else res.send(data);
    });
};



//Pour la companie
exports.companieCommande = (req, res, next) => {
    Commande.companieCommande(req.params.companieid, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found commande`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving commande "
                });
            }
        } else res.send(data);
    });
};

//Detail d'une commande
exports.getDetails = (req, res, next) => {
    Commande.getDetails(req.params.commandeid, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found commande`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving commande "
                });
            }
        } else res.send(data);
    });
};