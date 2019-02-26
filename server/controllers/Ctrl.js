module.exports = {
  saveAddedQuestions: async (req, res) => {
    console.log('save Qs hit');
    try {
      const dbInstance = req.app.get('db');
      let { id } = req.params;
      console.log('req.body', req.body);
      const { question_title, question_id } = req.body;
      console.log('rstuff', question_title, question_id);
      // let surveyResponse = await dbInstance.getSurvey(id);
      // let survey = surveyResponse[0];

      // res.send(survey);
    } catch (error) {
      console.log('error getting surveys:', error);
      res.status(500).send(error);
    }
  },
  getAllAdminSurveys: async (req, res) => {
    try {
      let dbInstance = req.app.get('db');
      const { admin_id } = req.session.admin;
      // console.log(admin_id);
      let surveys = await dbInstance.getAdminSurveys(admin_id);
      // console.log('get all surveys ctrl:', surveys);
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
      // console.log(666, typeof id);
      let survey = await dbInstance.getSurvayWithQuestions(id);
      // console.log('survey/w/qs', survey);
      res.send(survey);
    } catch (error) {
      console.log('error getSingleSurveys:', error);
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
      let { question_title, type_id } = req.body;
      let { id } = req.params;
      let question = await dbInstance.addQuestionToSurvey([
        id,
        question_title,
        type_id
      ]);
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
  }
  // selectedQuestion: async (req, res) => {
  //   console.log(`we hit selectedQ`);
  //   try {
  //     let dbInstance = req.app.get('db');
  //     const { id } = req.params;
  //     // console.log(666, typeof id);
  //     let question = await dbInstance.getSelectedQuestion(id);
  //     // console.log('survey/w/qs', survey);
  //     res.send(question);
  //   } catch (error) {
  //     res.status(500).send(error);
  //     console.log('error getting selected Question', error);
  //   }
  // }
  // getOptions: async (req, res) => {
  //   try {
  //     let dbInstance = req.app.get('db');
  //     const { id } = req.params;
  //     let options = await dbInstance.getSurveyOptions(id);
  //     res.send(options);
  //   } catch (error) {
  //     res.status(500).send(error);
  //     console.log('error getting selected Options', error);
  //   }
  // }
  // getSurvayQuestions: async (req, res) => {
  //   try {
  //     let dbInstance = req.app.get('db');
  //     // let { id } = req.params;
  //     const { survay_id: id } = req.params;
  //     let questions = await dbInstance.getSurvayQuestions(id);
  //     // console.log('get all surveys ctrl:', surveys);
  //     res.send(questions);
  //   } catch (error) {
  //     console.log('error getSurvayQuestions:', error);
  //     res.status(500).send(error);
  //   }
  // }
};
