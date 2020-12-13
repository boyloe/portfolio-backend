"use strict";
exports.__esModule = true;
var express = require("express");
var fetch = require('node-fetch');
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
var app = express();
var port = 4000;
var blogApiKey = process.env.DEV_API_KEY;
fetch("https://dev.to/api/articles/me", {
    headers: {
        "Api-Key": "" + blogApiKey
    }
})
    .then(function (response) { return response.json(); })
    .then(console.log);
app.get('/blogposts', function (request, response) {
});
app.listen(port);
