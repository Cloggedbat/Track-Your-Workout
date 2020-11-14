const express = require("express")
const app = express();
const PORT = process.env.PORT || 8080;
var mongoose = require("mongoose");
const path = require("path")
const apiRoutes = require(path.join(__dirname, "./routes/api"))
const db = require("./modules");



//Middleware for data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/Develop/public"));
// app.use(logger("dev"));

// require("./routes/api.js")(app)
// app.use(apiRoutes)






    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });



