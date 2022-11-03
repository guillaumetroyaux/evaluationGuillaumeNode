"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const MineController_1 = require("../controllers/MineController");
const mineController = new MineController_1.MineController();
exports.router = express_1.default.Router({
    strict: true
});
exports.router.route('/mine/show/:id').get(mineController.read);
exports.router.route('/mine/add').post(mineController.create);
exports.router.route('/mine/update/:id').put(mineController.update);
exports.router.route('/mine/delete/:id').delete(mineController.delete);
