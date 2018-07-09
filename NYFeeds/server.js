//setup

const express = require('express');
var request = require('request');
const morgan = require('morgan'); // log requests to the console 
var bodyParser = require('body-parser'); // pull information from HTML POST (express4)
const app = express();

//Configuration

app.use(express.json());
    app.use(express.static(__dirname + '/app')); // static files location 
    app.use(morgan('dev')); // log every request to the console

//routes

	//news feed
    app.get('/api/feed', function (req, res, next) {
        var url = "http://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/1.json?apikey=6ff8b8da9e7340059dd9245fe15971f3";
        request({
            uri: url,
            method: 'GET',
            json: true
        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                res.send(body);
            }
        });
    });

    app.get('*', function(req, res) {
        res.sendfile('index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });

//listen (port)
app.listen(3000, () => { console.log("Listening on port 3000...");} );