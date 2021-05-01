const path = require('path');
const { Sequelize, Model, DataTypes } = require('sequelize');

const options = { logging: false };
const url = process.env.DATABASE_URL || "sqlite:quiz.sqlite";

const sequelize = new Sequelize(url, options);


class Quiz extends Model { }

Quiz.init(
	{
		question: {
			type: DataTypes.STRING,
			unique: { msg: "Quiz already exists" }
		},
		answer: DataTypes.STRING
	},
	{ sequelize }
);

console.log(sequelize.models);

module.exports = sequelize;




