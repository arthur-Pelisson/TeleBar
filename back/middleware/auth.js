const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
    // console.log(req.params);
    jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function(err, decoded) {
        if (err) {
            res.status(401).json({ status: "Unauthorized", message: err.message, data: null });
        } else {
            // add user id to request
            req.params.userId = decoded.id;
            req.params.role = decoded.role;
            next();
        }
    });
}