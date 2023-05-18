const { DataTypes, Sequelize } = require("sequelize");

var opts = {
  define: {
    //prevent sequelize from pluralizing table names
    freezeTableName: true,
  },
};

const sequelize = new Sequelize({
  host: "localhost",
  dialect: "postgres",
  database: "constelDB",
  username: "postgres",
  password: process.env.POSTGRES_PASSWD,
  define: {
    freezeTableName: true,
  },
});

const Student = sequelize.define(
  "student",
  {
    idstudent: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  { createdAt: false, updatedAt: false }
);

const Mentor = sequelize.define(
  "mentor",
  {
    idmentor: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  { createdAt: false, updatedAt: false }
);

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
