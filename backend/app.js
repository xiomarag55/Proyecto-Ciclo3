var express = require("express");
var mongoose = require("mongoose");
const cors = require("cors");
var app = express();

const productsRoutes = require("./routes/products");
const usersRoutes = require("./routes/users");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
mongoose
  .connect(
    "mongodb+srv://ChocoApp:Q3F9xoUKvmtWgpm8@cluster0.ts2e7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Base de datos conectada");
  });

app.use("/api/products", productsRoutes);
app.use("/api/users", usersRoutes);

module.exports = app;