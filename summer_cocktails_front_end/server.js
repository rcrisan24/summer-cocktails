'use strict';

const express = require('express');
const app = express();
var request = require('request');

// Constants
const PORT = 5000;
const HOST = '0.0.0.0';

// App Initialization and startup
app.listen(PORT, HOST);
console.log(`Running summer cocktails frontend on http://${HOST}:${PORT}`);

app.use(express.static('public'))

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));



app.post('/add_cocktail', function(req, res) {

    console.log (req)

    var name = req.body.name
    var price = req.body.price;
    var body = {name: name, price: price}

    console.log("New coktail data " + name + " " + price)

    var method = req.method.toUpperCase();
    var proxy_url = 'http://localhost:4000/api/cocktails';
  
    var options = {
          headers: {"Connection": "close"},
            url: proxy_url,
            method: method,
            json: true,
            body: body
    };
  
    function callback(error, response, data) {
        if (!error && response.statusCode == 200) {
            console.log('----- interface data ------', data);
  
            res.json(data)
        }
    }
  
    request(options, callback);
});