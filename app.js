// DEFINE variables for server
const express = require("express");
const path = require("path");
const PORT = 3001;

const app = express();

app.set("/views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(__dirname + '/public'));
app.use("/build/",express.static(path.join(__dirname, "node_modules/three/build")));
app.use("/jsm/", express.static(path.join(__dirname, "node_modules/three/examples/jsm")));


app.get("/", (req, res) => {
    res.render("index.ejs");
})


app.listen(PORT, () => {
    console.log(`app listening on port number ${PORT}`)
})

