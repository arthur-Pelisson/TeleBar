const Companie = require('../model/companie.model');

exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    Companie.updateById(
        req.params.userId,
        new Companie(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found companie with user id ${req.params.userId}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating Companie with user id " + req.params.userId
                    });
                }
            } else res.send(data);
        }
    );
}

// Retrieve all Companie from the database.
exports.findAll = (req, res) => {
    Companie.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Companie."
            });
        else res.send(data);
    });
};

exports.findById = (req, res, next) => {
    Companie.findById(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found companie with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Companie with id " + req.params.id
                });
            }
        } else res.send(data);
    });
};