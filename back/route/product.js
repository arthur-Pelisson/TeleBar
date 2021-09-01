module.exports = app => {
    const product = require("../controller/product.controller");
    const auth = require('../middleware/auth');


    app.post("/product", auth, product.create);
    app.put("/product/:id", auth, product.update);
    app.delete("/product/:id", auth, product.delete);
    app.get("/companie/:companieId/product", product.findAllCompanieProduct);
    app.get('/product/:id', auth, product.findById);

}