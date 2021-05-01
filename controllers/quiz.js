//const Sequelize = require("sequelize");
const {models} = require("../models/index.js");
//const quizzes = await models.Quiz.findAll();
//console.log(quizzes);

// GET /quizzes
exports.index = async (req, res, next) => {
    console.log('++++++++++++');
    try {
        console.log('++++++++++++'+JSON.stringify(models));
        const quizzes = await models.Quiz.findAll();
        console.log(quizzes);
		res.render('quizzes/index.ejs', { quizzes} );
        //res.send(indexView(quizzes))
    } catch (err) {
        next(err);
    }
};
