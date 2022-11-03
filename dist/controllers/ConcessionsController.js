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
exports.ConcessionsController = void 0;
const CrudController_1 = require("./CrudController");
const database_1 = require("../config/database");
const sequelize_1 = require("sequelize");
const Concessions_1 = require("../models/Concessions");
class ConcessionsController extends CrudController_1.CrudController {
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const concessions = yield database_1.sequelize
                .query('SELECT*FROM concessions WHERE id_concessions=?', {
                replacements: [req.params.id],
                type: sequelize_1.QueryTypes.SELECT,
            });
            console.log('log', concessions[0]);
            res.json(concessions[0]);
        });
    }
    create(req, res) {
        Concessions_1.Concessions.create(req.body)
            .then(concessions => res.json(concessions))
            .catch(err => {
            console.log(err);
            res.json({ "message": "Insertion impossible" });
        });
    }
    update(req, res) {
        let id = req.params.id;
        let concessionsUpdate = req.body;
        Concessions_1.Concessions.findByPk(id)
            .then(concessions => {
            if (concessions !== null) {
                concessions.set(concessionsUpdate);
                concessions.save();
                res.json({ "message": "update done" });
            }
            else {
                res.json({ '{"message': "no concessions with id $(id)" });
            }
        })
            .catch(err => {
            console.log(err);
            res.json({ "message": "mise à jour impossible" });
        });
    }
    delete(req, res) {
        let id = req.params.id;
        Concessions_1.Concessions.findByPk(id)
            .then(concessions => {
            if (concessions !== null) {
                concessions.destroy();
                res.json({ "message": "update done" });
            }
            else {
                res.json({ '{"message': "no concessions with id $(id)" });
            }
        })
            .catch(err => {
            console.log(err);
            res.json({ "message": "mise à jour impossible" });
        });
    }
}
exports.ConcessionsController = ConcessionsController;
