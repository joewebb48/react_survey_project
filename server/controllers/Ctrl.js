module.exports = {
  saveAddedQuestions: async (req, res) => {
    console.log('save Qs hit');
    try {
      const dbInstance = req.app.get('db');
      let { id } = req.params;
      console.log('req.body', req.body);
      const { question_title, question_id } = req.body;
      console.log('rstuff', question_title, question_id);
    } catch (error) {
      console.log('error getting surveys:', error);
      res.status(500).send(error);
    }
  },
  getAllAdminSurveys: async (req, res) => {
    try {
      let dbInstance = req.app.get('db');
      const { admin_id } = req.session.admin;
      let surveys = await dbInstance.getAdminSurveys(admin_id);
      res.send(surveys);
    } catch (error) {
      console.log('error getAllAdminSurveys:', error);
      res.status(500).send(error);
    }
  },
  getSingleSurvey: async (req, res) => {
    try {
      let dbInstance = req.app.get('db');
      const { id } = req.params;
      let survey = await dbInstance.getSurvayWithQuestions(id);
      res.send(survey);
    } catch (error) {
      console.log('error getSingleSurveys:', error);
      res.status(500).send(error);
    }
  },
  //
  //
  //

  getSurveyWithQuestionAndOptions: async (req, res) => {
    try {
      let dbInstance = req.app.get('db');
      const { surveyID } = req.params;
      let surveyInformation = await dbInstance.getSingleSurvey(surveyID);
      let allQuestions = await dbInstance.getQuestion(surveyID);
      for (let i = 0; i < allQuestions.length; i++) {
        let questionId = allQuestions[i].question_id;

        let getOptions = await dbInstance.getOptionsForQuestion(questionId);
        allQuestions[i].options = getOptions;
        allQuestions[i].surveyInfo = surveyInformation;
      }
      console.log(surveyID);
      console.log('allQuestions', allQuestions);
      res.send(allQuestions);
    } catch (error) {
      console.log('Error Getting Survey With Questions and Options:', error);
      res.status(500).send(error);
    }
  },
  takeSurvey: async (req, res) => {
    try {
      let dbInstance = req.app.get('db');
      const { surveyID } = req.params;
      console.log(surveyID);
      let surveyInformation = await dbInstance.getSingleSurvey(surveyID);
      let allQuestions = await dbInstance.getQuestion(surveyID);
      for (let i = 0; i < allQuestions.length; i++) {
        let questionId = allQuestions[i].question_id;

        let getOptions = await dbInstance.getOptionsForQuestion(questionId);
        allQuestions[i].options = getOptions;
        allQuestions[i].surveyInfo = surveyInformation;
      }
      // console.log(surveyID);
      // console.log('take survey', allQuestions);
      // console.log(allQuestions);
      res.send(allQuestions);
    } catch (error) {
      console.log('Error Getting Survey to take:', error);
      res.status(500).send(error);
    }
  },

  getOptions: async (req, res) => {
    try {
      let dbInstance = req.app.get('db');
      const { id } = req.params;

      let options = await dbInstance.getOptions(id);
      res.send(options);
    } catch (error) {
      console.log('error options:', error);
      res.status(500).send(error);
    }
  },
  createSurvey: async (req, res) => {
    console.log('add survey hit');
    try {
      const dbInstance = req.app.get('db');

      let {
        admin_id,
        survey_title,
        subtitle,
        date,
        active,
        type,
        survey_id,
        questions_title,
        type_id,
        option_content,
        correct,
        question_id
      } = req.body;
      let survey = await dbInstance.createSurvey([
        admin_id,
        survey_title,
        subtitle,
        date,
        active
      ]);

      let initType = await dbInstance.initType([type]);
      let questions = await dbInstance.initQuestion([
        survey[0].survey_id,
        questions_title,
        type_id
      ]);
      let options = await dbInstance.initOptions([
        option_content,
        correct,
        question_id
      ]);
      res.send(survey, initType, questions, options);
    } catch (error) {
      console.log('error creating survey', error);
      res.status(500).send(error);
    }
  },
  addQuestion: async (req, res) => {
    try {
      const dbInstance = req.app.get('db');
      let { title, type_id } = req.body;
      let { id } = req.params;
      let question = await dbInstance.addQuestionToSurvey([id, title, type_id]);
      console.log(question);

      let mappedOptions = req.body.options.map(async (option, i) => {
        let { content } = option;
        let options = await dbInstance.addOptionToSurvey([
          content,
          null,
          question[0].question_id
        ]);
        return options;
      });
      // console.log(options);
      let newQ = [question, mappedOptions];
      res.send(newQ);
    } catch (error) {
      console.log('error cant Add Questions:', error);
      res.status(500).send(error);
    }
  },
  saveTitleandSubtitle: async (req, res) => {
    try {
      const dbInstance = req.app.get('db');
      // console.log('req', req, req.params);
      const { s_title, s_subtitle } = req.body;

      dbInstance
        .updateSurveyInfo([s_title, s_subtitle, req.params.id])
        .then(() => {
          res.sendStatus(200);
        });
    } catch (error) {
      res.status(500).send(error);
      console.log('error saving title and/or subtitle', error);
    }
  },
  addNewOption: async (req, res) => {
    try {
      let dbInstance = req.app.get('db');
      let { id } = req.params;
      let newOption = await dbInstance.addOptionToSurvey([
        'New Option',
        null,
        id
      ]);
      res.send(newOption);
    } catch (error) {
      res.status(500).send(error);
      console.log('error adding new option', error);
    }
  },
  deleteOption: async (req, res) => {
    try {
      let dbInstance = req.app.get('db');
      let { id } = req.params;
      // console.log(id);
      let deleteOption = await dbInstance.deleteOption(id);
      res.send(deleteOption);
    } catch (error) {
      res.status(500).send(error);
      console.log('error deleting option', error);
    }
  },
  editQuestionTitle: async (req, res) => {
    try {
      let dbInstance = req.app.get('db');
      let { id } = req.params;
      let { title } = req.body;
      // console.log(title);
      let editQuestionTitle = await dbInstance.editQuestionTitle([id, title]);
      res.send(editQuestionTitle);
    } catch (error) {
      res.status(500).send(error);
      console.log('error deleting optionediting question title', error);
    }
  },
  deleteQuestion: async (req, res) => {
    try {
      let dbInstance = req.app.get('db');
      let { id } = req.params;
      // console.log('req.body in delete question', req.params);

      let deleteQuestion = await dbInstance.deleteQuestion([id]);
      res.send(deleteQuestion);
    } catch (error) {
      res.status(500).send(error);
      console.log('error deleting Question', error);
    }
  }
};
