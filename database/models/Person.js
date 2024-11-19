const { DataTypes } = require("sequelize");
const sequelize = require("../config");

const Person = sequelize.define(
  "Person",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
  },
  {
    tableName: "person",
    timestamps: false,
  }
);

module.exports = Person;
