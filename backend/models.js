import { Sequelize, Model, DataTypes } from "sequelize";

const sequelize = new Sequelize("sqlite::memory:");

const Student = sequelize.define("Student", {
  idStudent: DataTypes.NUMBER,
});

const Mentor = sequelize.define("Mentor", {
  idMentor: DataTypes.NUMBER,
  stars: DataTypes.NUMBER,
});
