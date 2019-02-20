const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require('massive');
require('dotenv').config();
const Ctrl = require('./controllers/Ctrl');
const Auth_ctrl = require('./controllers/Auth_ctrl');

const app = express();

const { CONNECTION_STRING, SESSION_SECRET } = process.env;
// CLEAN THIS UP LATER?

massive(CONNECTION_STRING)
  .then(dbInstance => {
    app.set('db', dbInstance);
  })
  .catch(err => {
    console.log(err);
  });

app.use(bodyParser.json());

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  })
);

//AUTH
app.post('/auth/login', Auth_ctrl.login);
app.post('/auth/register', Auth_ctrl.register);
app.get('/auth/logout', Auth_ctrl.logout);
app.get('/auth/currentAdmin', Auth_ctrl.getCurrentAdmin);

//SURVEYS
// app.get(`/api/surveys/:id`, Ctrl.getSurvey);
app.get(`/api/survey/:id`, Ctrl.getSingleSurvey);
app.get(`/api/surveys/:id`, Ctrl.getAllAdminSurveys);
app.post(`/api/surveys`, Ctrl.createSurvey);

//QUESTIONS.
app.post(`/api/question`, Ctrl.addQuestion);
// app.get(`/api/questions/:id`, Ctrl.getSurvayQuestions);

const SERVER_PORT = process.env.SERVER_PORT;
app.listen(SERVER_PORT, () => {
  console.log(`knock knock.. who's there??.. PORT $${SERVER_PORT}`);
});
