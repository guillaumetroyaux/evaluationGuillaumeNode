import {Model, DataTypes} from 'sequelize'
import { sequelize } from '../config/database'
import { Addresses } from './Adresses';


export class Concessions extends Model{

    declare id : number;
    declare name : string;
    declare siret : number;
    declare license : number;
    declare phone : number;
    declare id_adresses : number;

}

Concessions.init({

    id :{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name :{
        type: DataTypes.STRING,
        allowNull: false
    },
    siret:{
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    license:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone:{
        type: DataTypes.INTEGER,
        allowNull: 
        true,
    },
    id_adresses:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Addresses,
            key: 'id',
               }
    }

},
{
    sequelize,
    tableName: "concessions",
    timestamps: false
}
);

Concessions.hasOne(Addresses, {foreignKey:"id_adresses" })