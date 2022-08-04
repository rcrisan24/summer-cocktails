const mongoose = require("mongoose");


const Schema = mongoose.Schema;

let cocktail = new Schema(
    {
        name : String,
        price: Number
    }
)

module.exports = mongoose.model("Cocktail", cocktail)