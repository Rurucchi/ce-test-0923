const { DataTypes, Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  host: "localhost",
  dialect: "postgres",
  database: "constelDB",
  username: "postgres",
  password: "DuCompte1",
});

const Student = sequelize.define("student", {
  idStudent: DataTypes.INTEGER,
});

const Mentor = sequelize.define("mentor", {
  idMentor: DataTypes.INTEGER,
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
