"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
var route = express_1.default.Router();
app.use(express_1.default.json());
route.get('/', function (req, resp) {
    resp.send('ola mundo');
});
app.use(route);
app.listen(3000, function () {
    console.log("http://localhost:3000");
});
