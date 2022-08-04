'use strict';


// ALL NEEDED MODULES INITIALIZATION
const express = require('express');
const app = express();
const routes = require("./routes")


// Constants
const PORT = 4000;
const HOST = '0.0.0.0';


// DATABASE CONNECTION INTIALIZATION
const mongoose = require("mongoose");

var uri = 'mongodb://mongo:27017/summer_cocktails';

mongoose
.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true })
.then(() => {

    const app = express()

    app.use(express.json())
    app.use("/api", routes)

    // App Initialization and startup
    app.listen(PORT, HOST);
    console.log(`Running on http://${HOST}:${PORT}`);
});




