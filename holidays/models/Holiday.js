const mongoose = require("mongoose");


const Schema = mongoose.Schema;

let holiday = new Schema({
    destination: String,
    price: Number
})


module.exports = mongoose.model("Holiday", holiday)