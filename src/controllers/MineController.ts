import { CrudController } from "./CrudController";
import { Request, Response } from "express";
import {sequelize} from "../config/database";
import { QueryTypes } from "sequelize";
import { Mine } from "../models/Mine";

export class MineController extends CrudController{

    public async read (req: Request, res: Response):Promise<void>{
        const mine = await sequelize
            .query('SELECT*FROM mines WHERE id_mines=?', {
            replacements: [req.params.id],
                type: QueryTypes.SELECT,
            });
            console.log('log', mine[0]);
            res.json(mine[0]);
            
    }

    public create (req: Request, res: Response): void {
        Mine.create(req.body)
        .then(mine => res.json(mine))
        .catch(err => {
            console.log(err);
            res.json({"message":"Insertion impossible"});
        })
    }

    public update(req: Request,res: Response): void {
        let id = req.params.id;
        let mineUpdate = req.body;

        Mine.findByPk(id)
        .then(mine=>{
            if(mine!==null){
            mine.set(mineUpdate);
            mine.save();
            res.json({"message":"update done"})
            }else{
                res.json({'{"message':"no mine with id $(id)"})
            }
        })
        .catch(err => {

            console.log(err);
            res.json({"message":"mise à jour impossible"});
        });
    }

    public delete (req: Request, res: Response):void{
        let id = req.params.id;

        Mine.findByPk(id)
        .then(mine=>{
            if(mine!==null){
            mine.destroy();
            res.json({"message":"update done"})
            }else{
                res.json({'{"message':"no mine with id $(id)"})
            }
        })
        .catch(err => {

            console.log(err);
            res.json({"message":"mise à jour impossible"});
        });
    }
    
}
