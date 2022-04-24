const express = require("express");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");

const port = 3000;

const app = express();

app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(require("./routes"));


mongoose.connect("mongodb+srv://Galahad:20030909Bella@cluster0.5mvo4.mongodb.net/Back")
.then(() => {
    app.listen(port, () => console.log("Server has been started"));
})
.catch((err) => {
    console.log(err)
})