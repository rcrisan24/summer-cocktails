const express = require('express');
const router = express.Router()
const Holiday = require('./models/Holiday')

router.get("/holidays", async(req, res) => {
    const holidays = await Holiday.find();

    res.send(holidays);
})

router.post("/holidays", async(req, res) => {
    const holiday = new Holiday({
        destination: req.body.destination,
        price: req.body.price
    })

    await holiday.save();

    res.send(holiday);
})



module.exports = router