// Initiate Express
var express = require('express');
var app = express();
var { updateFilters } = require('./helpers/userIndex.js');
updateFilters();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//DELETE THIS
var cors = require('cors');
app.use(cors());

//HTTPS REDIRECT
app.use( function (req, res, next) {
    if (req.secure) {
        next();
    } else {
        next();
    }
});

//Static Files
var shouldCompress = function (req, res) {
    if (req.headers['x-no-compression']) {
        return false
    }
    return compression.filter(req, res)
};
var compression = require('compression');
app.use(compression({filter: shouldCompress}));
app.use(express.static('public', {dotfiles:'allow'}));

//If the webApp is using the api
var routes = require('./routes');
app.use('/api/', routes);


//Otherwise, just give them the client webApp
app.use('*', function(req,res){
     res.sendFile('D://github/standard-requests/public/dist/index.html');
});
//Different colored client webapp
app.use('/red', function(req, res) {
    res.sendFile('/home/adam/standard-requests/public/dist/indexred.html');
});

var http  = require('http');
http.createServer(app).listen(80);
/*
var fs = require('fs');
var privateKey = fs.readFileSync('/etc/letsencrypt/live/standardrequests.com/privkey.pem', 'utf8');
var certificate = fs.readFileSync('/etc/letsencrypt/live/standardrequests.com/cert.pem', 'utf8');
var ca = fs.readFileSync('/etc/letsencrypt/live/standardrequests.com/chain.pem', 'utf8');
var options = {key: privateKey, cert: certificate, ca: ca};
var https = require('https');
https.createServer(options, app).listen(443);
*/