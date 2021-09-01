const sql = require("../config/db.js");

// constructor
const User = function(user) {
    this.email = user.email;
    this.password = user.password;
    if (user.role == null) {
        user.role = 3;
    }
    this.role = user.role;
    this.nom = user.nom;
    this.prenom = user.prenom;
    this.telephone = user.telephone;
    this.date_de_naissance = user.date_de_naissance;

};

User.create = (newUser, result) => {
    sql.query("INSERT INTO user SET ?", newUser, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created user: ", { id: res.insertId, ...newUser });
        result(null, { id: res.insertId, ...newUser });
    });
};

User.findById = (userId, role, result) => {
    if (role == 2) {
        query = `SELECT user.id, user.email, companie.nom, companie.longitude, companie.latitude, companie.photo, companie.description FROM user INNER JOIN companie ON user.id = companie.user_id WHERE user.id = ${userId}`;
    } else if (role == 3) {
        query = `SELECT * FROM user  WHERE id = ${userId}`;
    }
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

User.getAll = result => {
    sql.query("SELECT * FROM user", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("user: ", res);
        result(null, res);
    });
};

User.updateById = (id, user, result) => {
    // console.log(user);
    sql.query(
        "UPDATE user SET email = (?), password = (?), nom = (?), prenom = (?), telephone = (?), date_de_naissance = (?) WHERE id = (?)", [user.email, user.password, user.nom, user.prenom, user.telephone, user.date_de_naissance, id],
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

            console.log("updated user: ", { id: id, ...user });
            result(null, { id: id, ...user });
        }
    );
};

User.remove = (id, result) => {
    sql.query("DELETE FROM user WHERE id = ?", id, (err, res) => {
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

        console.log("deleted user with id: ", id);
        result(null, res);
    });
};

User.removeAll = result => {
    sql.query("DELETE FROM user", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log(`deleted ${res.affectedRows} user`);
        result(null, res);
    });
};


User.findOne = (filter, result) => {
    sql.query("SELECT * FROM user WHERE email = ?", [filter],
        (err, res) => {
            if (err) {
                // console.log("error: ", err);
                result(null, res[0]);
                return;
            }

            if (res.length) {
                // console.log("found: ", res[0]);
                result(null, res[0]);
                return;
            }

            // not found User with the filter
            result({ kind: "not_found" }, null);
        });
}

User.getRole = (userId, result) => {
    sql.query("SELECT role.name FROM user INNER JOIN role ON role.id = ?", userId, (err, res) => {
        console.log(res);
        console.log("role");
        if (err) {
            // console.log("error: ", err);
            result(null, res[0]);
            return;
        }

        if (res.length) {
            // console.log("found: ", res[0]);
            result(null, res[0]);
            return;
        }
    });
}


module.exports = User;