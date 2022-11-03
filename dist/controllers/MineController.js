"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MineController = void 0;
const CrudController_1 = require("./CrudController");
const database_1 = require("../config/database");
const sequelize_1 = require("sequelize");
const Mine_1 = require("../models/Mine");
class MineController extends CrudController_1.CrudController {
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const mine = yield database_1.sequelize
                .query('SELECT*FROM mines WHERE id_mines=?', {
                replacements: [req.params.id],
                type: sequelize_1.QueryTypes.SELECT,
            });
            console.log('log', mine[0]);
            res.json(mine[0]);
        });
    }
    create(req, res) {
        Mine_1.Mine.create(req.body)
            .then(mine => res.json(mine))
            .catch(err => {
            console.log(err);
            res.json({ "message": "Insertion impossible" });
        });
    }
    update(req, res) {
        let id = req.params.id;
        let mineUpdate = req.body;
        Mine_1.Mine.findByPk(id)
            .then(mine => {
            if (mine !== null) {
                mine.set(mineUpdate);
                mine.save();
                res.json({ "message": "update done" });
            }
            else {
                res.json({ '{"message': "no mine with id $(id)" });
            }
        })
            .catch(err => {
            console.log(err);
            res.json({ "message": "mise à jour impossible" });
        });
    }
    delete(req, res) {
        let id = req.params.id;
        Mine_1.Mine.findByPk(id)
            .then(mine => {
            if (mine !== null) {
                mine.destroy();
                res.json({ "message": "update done" });
            }
            else {
                res.json({ '{"message': "no mine with id $(id)" });
            }
        })
            .catch(err => {
            console.log(err);
            res.json({ "message": "mise à jour impossible" });
        });
    }
}
exports.MineController = MineController;
