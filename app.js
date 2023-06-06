require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const hbs = require("hbs");

// handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials", function (err) {});

// servir contenido estatico

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", { nombre: "Ricardo Coronado", titulo: "curso de node" });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    nombre: "Ricardo Coronado",
    titulo: "curso de node",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    nombre: "Ricardo Coronado",
    titulo: "curso de node",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
