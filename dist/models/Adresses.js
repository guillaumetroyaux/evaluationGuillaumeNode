"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Addresses = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class Addresses extends sequelize_1.Model {
}
exports.Addresses = Addresses;
Addresses.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    street: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    complement: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    zipcode: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    town: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize: database_1.sequelize,
    tableName: "addresses",
    timestamps: false
});
