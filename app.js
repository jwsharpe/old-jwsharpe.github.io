var express = require("express");
var app = express();

//setting middleware
app.use("/dependencies", express.static(__dirname + "/dependencies")); //Serves resources from public folder
app.use("/", express.static(__dirname + "/src"));
app.get("/", (req, res) => {
  res.sendFile("src/index.html", { root: __dirname });
});
app.listen(5000);
