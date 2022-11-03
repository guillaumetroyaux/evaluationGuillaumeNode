"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcessionRouter = void 0;
const express_1 = __importDefault(require("express"));
const ConcessionsController_1 = require("../controllers/ConcessionsController");
const concessionsController = new ConcessionsController_1.ConcessionsController();
exports.ConcessionRouter = express_1.default.Router({
    strict: true
});
exports.ConcessionRouter.route('/concessions/show/:id').get(concessionsController.read);
exports.ConcessionRouter.route('/concessions/add').post(concessionsController.create);
exports.ConcessionRouter.route('/concessions/update/:id').put(concessionsController.update);
exports.ConcessionRouter.route('/concessions/delete/:id').delete(concessionsController.delete);
