var app = require("express")();

var mustacheExpress = require("mustache-express");

// Register '.html' extension with The Mustache Express
app.engine("html", mustacheExpress());

app.set("view engine", "html");
app.set("views", __dirname + "/views"); // you can change '/views' to '/public',
// but I recommend moving your templates to a directory
// with no outside access for security reasons

app.get("/", function (req, res) {
  // Send response
  res.render("index", {
    server: {
      title: "Test with express and mustachejs",
      meta: {},
    },
  });
});

app.listen(3000, function () {
  console.log("Example app listening at http://localhost:3000");
});
