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


router.put("/cocktails/:id", async(req, res) => {
    var id = req.params.id

    const toBeUpdated = await Cocktail.findById(id)

    if (toBeUpdated != null) {
        toBeUpdated.name = req.body.name,
        toBeUpdated.price =  req.body.price,
        toBeUpdated.ingredients =  req.body.ingredients

        await toBeUpdated.save()

        res.send(toBeUpdated)
    } else {
        res.status(404).send({
            message: "Not found"
        })
    }
})

router.get("/cocktails/:id", async(req, res) => {
    var id = req.params.id

    const byId = await Cocktail.findById(id)

    if (byId != null) {
        res.send(byId)
    } else {
        res.status(404).send({
            message: "Not found"
        })
    }
})


router.delete("/cocktails/:id", async(req, res) => {
    var id = req.params.id

    const toBeDeleted = await Cocktail.findById(id)

    if (toBeDeleted != null) {
        await toBeDeleted.delete()

        res.status(200).send();
    } else {
        res.status(404).send();
    }
})


module.exports = router
