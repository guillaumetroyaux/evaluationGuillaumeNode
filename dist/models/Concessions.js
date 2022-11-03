"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Concessions = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
const Adresses_1 = require("./Adresses");
class Concessions extends sequelize_1.Model {
}
exports.Concessions = Concessions;
Concessions.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    siret: {
        type: sequelize_1.DataTypes.DOUBLE,
        allowNull: false,
    },
    license: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    id_adresses: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Adresses_1.Addresses,
            key: 'id',
        }
    }
}, {
    sequelize: database_1.sequelize,
    tableName: "concessions",
    timestamps: false
});
Concessions.hasOne(Adresses_1.Addresses, { foreignKey: "id_adresses" });
