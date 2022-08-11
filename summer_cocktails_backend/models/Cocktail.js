const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let cocktail = new Schema(
    {
        name : String,
        price: Number,
        ingredients: [
            {
                name: String,
                quantity: String
            }
        ]
    }
)

module.exports = mongoose.model("Cocktail", cocktail)