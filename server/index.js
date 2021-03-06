const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require('massive');
require('dotenv').config();
const Ctrl = require('./controllers/Ctrl');
const Auth_ctrl = require('./controllers/Auth_ctrl');

const app = express();

const { CONNECTION_STRING, SESSION_SECRET, DEV } = process.env;
// CLEAN THIS UP LATER?

massive(CONNECTION_STRING)
  .then(dbInstance => {
    console.log('am i here');
    app.set('db', dbInstance);
  })
  .catch(err => {
    console.log(err);
  });

app.use(bodyParser.json());

app.use(express.static(`${__dirname}/../build`));

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  })
);
// app.use((req, res, next) => {
//   if (DEV) {
//     if (req.session.admin) {
//       next();
//     } else {
//       req.session.admin = { admin_id: 43, email: 8 };
//       next();
//     }
//   } else {
//     next();
//   }
// });
// DEV=anythignthatisastring <- for the ENV FILE

//AUTH
app.post('/auth/login', Auth_ctrl.login);
app.post('/auth/register', Auth_ctrl.register);
app.get('/auth/logout', Auth_ctrl.logout);
app.get('/auth/currentAdmin', Auth_ctrl.getCurrentAdmin);

//SURVEYS
// app.get(`/api/surveys/:id`, Ctrl.getSurvey);
// app.get(`/api/survey/:id`, Ctrl.getSingleSurvey);
app.get(`/api/getFullSurvey/:surveyID`, Ctrl.getSurveyWithQuestionAndOptions);
app.get(`/api/getSurveyToTake/:surveyID`, Ctrl.takeSurvey);
app.get(`/api/surveys/:id`, Ctrl.getAllAdminSurveys);

app.post(`/api/surveys`, Ctrl.createSurvey);
app.put(`/api/saveSurveyChanges/:id`, Ctrl.saveTitleandSubtitle);

//QUESTIONS.
app.post(`/api/question/:id`, Ctrl.addQuestion);
app.post(`/api/saveAddedQuestions/:id`, Ctrl.saveAddedQuestions);
app.put(`/api/editQuestionTitle/:id`, Ctrl.editQuestionTitle);
app.delete(`/api/deleteQuestion/:id`, Ctrl.deleteQuestion);
//
// app.get(`/api/selectedQuestion/:id`, Ctrl.selectedQuestion);
//
// app.get(`/api/questions/:id`, Ctrl.getSurvayQuestions);
//OPTIONS
app.get(`/api/options/:id`, Ctrl.getOptions);
app.post(`/api/addNewOption/:id`, Ctrl.addNewOption);
app.delete(`/api/deleteOption/:id`, Ctrl.deleteOption);

const SERVER_PORT = process.env.SERVER_PORT;
app.listen(SERVER_PORT, () => {
  console.log(`knock knock.. who's there??.. PORT $${SERVER_PORT}`);
});
