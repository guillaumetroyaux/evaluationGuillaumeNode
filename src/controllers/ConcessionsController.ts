import { CrudController } from "./CrudController";
import { Request, Response } from "express";
import {sequelize} from "../config/database";
import { QueryTypes } from "sequelize";
import { Concessions } from "../models/Concessions";

export class ConcessionsController extends CrudController{

    public async read (req: Request, res: Response):Promise<void>{
        const concessions = await sequelize
            .query('SELECT*FROM concessions WHERE id_concessions=?', {
            replacements: [req.params.id],
                type: QueryTypes.SELECT,
            });
            console.log('log', concessions[0]);
            res.json(concessions[0]);
            
    }

    public create (req: Request, res: Response): void {
        Concessions.create(req.body)
        .then(concessions => res.json(concessions))
        .catch(err => {
            console.log(err);
            res.json({"message":"Insertion impossible"});
        })
    }

    public update(req: Request,res: Response): void {
        let id = req.params.id;
        let concessionsUpdate = req.body;

        Concessions.findByPk(id)
        .then(concessions=>{
            if(concessions!==null){
                concessions.set(concessionsUpdate);
                concessions.save();
            res.json({"message":"update done"})
            }else{
                res.json({'{"message':"no concessions with id $(id)"})
            }
        })
        .catch(err => {

            console.log(err);
            res.json({"message":"mise à jour impossible"});
        });
    }

    public delete (req: Request, res: Response):void{
        let id = req.params.id;

        Concessions.findByPk(id)
        .then(concessions=>{
            if(concessions!==null){
                concessions.destroy();
            res.json({"message":"update done"})
            }else{
                res.json({'{"message':"no concessions with id $(id)"})
            }
        })
        .catch(err => {

            console.log(err);
            res.json({"message":"mise à jour impossible"});
        });
    }
    
}
