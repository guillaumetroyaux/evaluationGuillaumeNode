"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const constants_1 = require("./config/constants");
const Mine_1 = require("./routes/Mine");
const Concessions_1 = require("./routes/Concessions");
const app = (0, express_1.default)();
app.use(express_1.default.json());
//app.get("/", (req, res) => res.send("Hello world"));
app.listen(constants_1.PORT, () => {
    console.log(`Server is listening on port ${constants_1.PORT}`);
});
//mine
app.get('/mine/show/:id', Mine_1.router);
app.post('/mine/add', Mine_1.router);
app.put('/mine/update/:id', Mine_1.router);
app.delete('/mine/delete/:id', Mine_1.router);
//concession
app.get('/concessions/show/:id', Concessions_1.ConcessionRouter);
app.post('/concessions/add', Concessions_1.ConcessionRouter);
app.put('/concessions/update/:id', Concessions_1.ConcessionRouter);
app.delete('/concessions/delete/:id', Concessions_1.ConcessionRouter);
