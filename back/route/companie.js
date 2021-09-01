module.exports = app => {
    const companie = require("../controller/companie.controller");
    const auth = require('../middleware/auth');


    app.put("/companie", auth, companie.update);
    app.get("/companie/:id", auth, companie.findById);
    app.get("/companies", auth, companie.findAll);
}