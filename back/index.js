const express = require("express");
const cors = require('cors');
const app = express();
var jwt = require('jsonwebtoken');


app.use(cors());


// parse requests of content-type: application/json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.set('secretKey', 'mononoke'); // jwt secret token

require("./route/product.js")(app);
require("./route/user.js")(app);
require("./route/companie.js")(app);
require("./route/commande.js")(app);

app.use((req, res, next) => {
    console.log("Object renvoyé", res);
    res.status(405).send({
        status: 405,
        error: "Methode not allowed"
    })
});


// simple route
app.get("/", (req, res) => {
    res.json({ message: "hello world" });
});

// set port, listen for requests
app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});