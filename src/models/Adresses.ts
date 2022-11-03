import {Model, DataTypes} from 'sequelize'
import { sequelize } from '../config/database'


export class Addresses extends Model{

    declare id : number;
    declare street : string;
    declare complement : number;
    declare zipcode : number;
    declare town : string;
}

Addresses.init({

    id :{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    street :{
        type: DataTypes.STRING,
        allowNull: true
    },
    complement:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    zipcode:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    town:{
        type: DataTypes.STRING,
        allowNull: 
        false,
    }

},
{
    sequelize,
    tableName: "addresses",
    timestamps: false
}
);