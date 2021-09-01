const sql = require("../config/db.js");

// constructor
const Commande = function(order) {
    this.total_price = order.total_price;
};


//Listage de l'Order
//companie order

Commande.create = (newCommande, user_id, companie_id, orderItemR , result) => {
    const order = {
        total_price: newCommande.total_price,
        //created_time: Date.now(),
        user_id: user_id,
        companie_id: companie_id
    }
    sql.query("INSERT INTO commande SET total_price = (?), user_id = (?), companie_id = (?)" , [ newCommande.total_price, user_id, companie_id ], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log(orderItemR);
        const commandeItems = orderItemR.map(
            commandeItem => {
                return {
                    product_id: commandeItem.product_id,
                    quantity:commandeItem.quantity,
                    commande_id: res.insertId,
                }
            }
        )
        sql.query("INSERT INTO commande_item SET ?", commandeItems, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            console.log("created commande: ", { id: res.insertId, ...newCommande });
            result(null, { id: res.insertId, ...newCommande });
        })
    });
};


//User order
Commande.getCommande = (userId, result) => {
    query = `SELECT * FROM commande WHERE user_id = ${userId}`;
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found user: ", res[0]);
            result(null, res);
            return;
        }

        // not found User with the id
        result({ kind: "not_found" }, null);
    });
};

//Companie order
Commande.companieCommande = (companieId, result) => {
    sql.query(`SELECT * FROM commande WHERE companie_id = ${companieId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("commande: ", res);
        result(null, res);
    });
};

//Detail order
Commande.getDetails = (commandeId, result) => {
    sql.query(`SELECT * FROM commande_item INNER JOIN product ON product.id = commande_item.product_id WHERE commande_id = ${commandeId}`,
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            result(null, res);
        });
}











module.exports = Commande;