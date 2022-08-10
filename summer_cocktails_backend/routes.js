const express = require("express")
const router = express.Router()
const Cocktail = require("./models/Cocktail")

router.get("/cocktails", async(req, res) => {
    const cocktails = await Cocktail.find()
    res.send(cocktails)
})



router.post("/cocktails", async(req, res) => {
    const cocktail = new Cocktail({
        name: req.body.name,
        price: req.body.price,
        ingredients: req.body.ingredients
    })

    await cocktail.save()

    res.send(cocktail)
})


module.exports = router
