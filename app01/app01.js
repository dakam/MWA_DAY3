const express= require("express");
const path = require("path");
require("./api/data/dbConnection").open();

const router = require("./api/routes");
const app = express();
app.set("port", 3000);



app.use("/",express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: false}));
app.use(express.json({extended: false}));

app.use("/api", router);

const server = app.listen(app.get("port"), function() {

    const port = server.address().port;
    console.log("Server Listening on port ", port);

})