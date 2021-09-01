module.exports = app => {
    const commande = require("../controller/commande.controller");
    const auth = require('../middleware/auth');


    app.post("/commande", auth, commande.create);
    app.get('/commande/:userid/mine', auth, commande.getCommande);
    app.get('/commande/:companieid/companie', auth, commande.companieCommande);
    app.get("/commande", auth, commande.getDetails);
}