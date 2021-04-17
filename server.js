var express = require("express");
var app = express();

app.use(express.static("."));

var server = app.listen(8000, function () {
  var port = server.address().port;
  console.log("server started at http://localhost:%s", port);
});
