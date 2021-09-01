const sql = require("../config/db.js");

// constructor
const Product = function(product) {
    this.name = product.name;
    this.description = product.description;
    this.category = product.category;
    this.price = product.price;
};


Product.create = (product,companieId, result) => {
    // console.log(user);
    sql.query(
        "INSERT INTO product SET name = (?), description = (?), price = (?), category = (?)", [product.name, product.description, product.price, product.category],
        (err, resProduct) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            console.log("created product: ", { id: resProduct.insertId, ...product });

        sql.query(
            "INSERT INTO companie_product SET product_id = (?), companie_id = (?)", [resProduct.insertId, companieId],
            (err, resCompanieProduct) => {
                if (err) {
                    console.log("error: ", err);
                    result(null, err);
                    return;
                }
                result(null, { id: resProduct.insertId, ...product });
            });
        }
    );
};

Product.findById = (productId, result) => {
    query = `SELECT * FROM product WHERE id = ${productId}`;
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found product: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found product with the id
        result({ kind: "not_found" }, null);
    });
};

Product.findAllCompanieProduct = (companieId, result) => {
    console.log(companieId);
    sql.query("SELECT * FROM product INNER JOIN companie_product ON companie_product.product_id = product.id WHERE companie_id = ?",
        [companieId], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("product: ", res);
        result(null, res);
    });
};

//Update
Product.updateById = (id, product, result) => {
    // console.log(user);
    sql.query(
        "UPDATE product SET name = (?), description = (?), price = (?), category = (?) WHERE id = (?) ", [product.name, product.description, product.price, product.category, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                // not found User with the id
                result({ kind: "not_found" }, null);
                return;
            }
            console.log("updated companie: ", { id: id, ...product });
            result(null, { id: id, ...product });
        }
    )};
    //Suppression d'un product

        Product.delete = (id, result) => {
            sql.query("DELETE FROM companie_product WHERE product_id = ?", [id], (err, res) => {
                if (err) {
                    console.log("error: ", err);
                    result(null, err);
                    return;
                }
                sql.query("DELETE FROM product WHERE id = ?", id, (err, res) => {
                    if (err) {
                        console.log("error: ", err);
                        result(null, err);
                        return;
                    }

                    if (res.affectedRows == 0) {
                        // not found product with the id
                        result({ kind: "not_found product" }, null);
                        return;
                    }

                    console.log("deleted product with id: ", id);
                    result(null, res);
                });
            });
        };




module.exports = Product