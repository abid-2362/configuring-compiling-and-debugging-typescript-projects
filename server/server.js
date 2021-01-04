"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var port = process.env.port || 8000;
var app = express();
app.use(express.static('public'));
app.listen(port, function () {
    console.log("listening to port " + port);
});
