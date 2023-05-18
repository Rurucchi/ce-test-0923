const { DataTypes, Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  host: "localhost",
  dialect: "postgres",
  database: "constelDB",
  username: "postgres",
  password: process.env.POSTGRES_PASSWD,
});

const Student = sequelize.define("student", {
  idstudent: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
});

const Mentor = sequelize.define("mentor", {
  idmentor: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
});

const Star = sequelize.define(
  "stars",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    idmentor: DataTypes.INTEGER,
    idstudent: DataTypes.INTEGER,
  },
  { createdAt: false, updatedAt: false }
);

module.exports = {
  Student,
  Mentor,
  Star,
};
