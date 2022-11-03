import {Model, DataTypes} from 'sequelize'
import { sequelize } from '../config/database'
import { Concessions } from './Concessions';


export class Mine extends Model{

    declare id_mines : number;
    declare name : string;
    declare longitude : number;
    declare latitude : number;
    declare id_concessions : number;

}

Mine.init({

    id_mines :{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name :{
        type: DataTypes.STRING,
        allowNull: false
    },
    longitude:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    latitude:{
        type: DataTypes.INTEGER,
        allowNull: 
        false,
    },
    id_concessions:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Concessions,
            key: 'id',
               }
    }

},
{
    sequelize,
    tableName: "mines",
    timestamps: false
}
);

Mine.hasOne(Concessions, {foreignKey:"id_concessions"});