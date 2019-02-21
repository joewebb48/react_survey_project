module.exports = {
  // getSurvey: async (req, res) => {
  //   try {
  //     const dbInstance = req.app.get('db');
  //     let { id } = req.params;
  //     let surveyResponse = await dbInstance.getSurvey(id);
  //     let survey = surveyResponse[0];

  //     res.send(survey);
  //   } catch (error) {
  //     console.log('error getting surveys:', error);
  //     res.status(500).send(error);
  //   }
  // },
  getAllAdminSurveys: async (req, res) => {
    try {
      let dbInstance = req.app.get('db');
      const { admin_id: id } = req.session.admin;
      // console.log(id);
      let surveys = await dbInstance.getAdminSurveys(id);
      // console.log('get all surveys ctrl:', surveys);
      res.send(surveys);
    } catch (error) {
      console.log('error getAdminSurveys:', error);
      res.status(500).send(error);
    }
  },
  getSingleSurvey: async (req, res) => {
    try {
      let dbInstance = req.app.get('db');
      const { id } = req.params;
      // let survey = await dbInstance.getSingleSurvey(id);
      let survey = await dbInstance.getSurvayWithQuestions(id);
      console.log('survey/w/qs', survey);
      res.send(survey);
    } catch (error) {
      console.log('error getAdminSurveys:', error);
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

      let { id, title, subtitle, date, active } = req.body;

      let survey = await dbInstance.createSurvey([
        id,
        title,
        subtitle,
        date,
        active
      ]);
      res.send(survey);
    } catch (error) {
      console.log('error creating survey', error);
      res.status(500).send(error);
    }
  },
  addQuestion: async (req, res) => {
    try {
      const dbInstance = req.app.get('db');

      let { survey_id, title, type } = req.body;
      let question = await dbInstance.addQuestionToSurvey([
        survey_id,
        title,
        type
      ]);
      res.send(question);
    } catch (error) {
      console.log('error cant Add Questions:', error);
      res.status(500).send(error);
    }
  }
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
