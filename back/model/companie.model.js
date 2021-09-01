const sql = require("../config/db.js");

// constructor
const Companie = function(companie) {
    this.nom = companie.nom;
    this.longitude = companie.longitude;
    this.latitude = companie.latitude;
    this.photo = companie.photo;
    this.description = companie.description;
};


Companie.updateById = (id, companie, result) => {
    // console.log(user);
    sql.query(
        "UPDATE companie SET nom = (?), longitude = (?), latitude = (?), photo = (?), description = (?) WHERE user_id = (?)", [companie.nom, companie.latitude, companie.longitude, companie.photo, companie.description, id],
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

            console.log("updated companie: ", { id: id, ...companie });
            result(null, { id: id, ...companie });
        }
    );
};

Companie.findById = (companieId, result) => {
    query = `SELECT * FROM companie WHERE id = ${companieId}`;
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found user: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found User with the id
        result({ kind: "not_found" }, null);
    });
};

Companie.getAll = result => {
    sql.query("SELECT * FROM companie", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("companie: ", res);
        result(null, res);
    });
};


module.exports = Companie;