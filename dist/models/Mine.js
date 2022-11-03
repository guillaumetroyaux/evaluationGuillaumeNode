"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mine = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
const Concessions_1 = require("./Concessions");
class Mine extends sequelize_1.Model {
}
exports.Mine = Mine;
Mine.init({
    id_mines: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    longitude: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    latitude: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    id_concessions: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Concessions_1.Concessions,
            key: 'id',
        }
    }
}, {
    sequelize: database_1.sequelize,
    tableName: "mines",
    timestamps: false
});
Mine.hasOne(Concessions_1.Concessions, { foreignKey: "id_concessions" });
