import React, { Component } from 'react';
import { InitQuestions } from '../Constant/ConstantQuestions';
import EditContainer from '../containers/EditContainer';
import axios from 'axios';
import SurveyPreview from '../Survey/SurveyPreview/SurvayPreview';

class SurveyLandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      s_title: '',
      s_subtitle: '',
      // q_title: '',
      // q_type: '',
      selectedQuestion: 'this will be an found by an ID',
      questions: [],
      preEditQuestions: []
      // ^^^^ this array of questions is going to have objects that have qtitle qtype and qoptions
      // selectedQuestions: = 'index'
    };
  }
  componentDidMount() {
    axios
      .get(`/api/survey/${this.props.match.params.surveyId}`)
      .then(firstRes => {
        console.log('firstRes.data:', firstRes.data);
        this.setState({
          questions: firstRes.data
        });
        let promises = [];
        firstRes.data.forEach((item, i) => {
          // promises.push(axios.get(`/api/options/${item.question_id}`));
          axios.get(`/api/options/${item.question_id}`).then(res => {
            let questions = this.state.questions;
            questions[i].options = res.data;
            this.setState({
              questions: questions
            });
          });
        });
        axios.all(promises).then((secondRes, i) => {
          const optionInfo = [];
          //QUESTIONINFO HAS 'CONTENT', & 'OPTION_ID
          secondRes.forEach((item, i) => {
            optionInfo.push(item.data);
            console.log('option Info', optionInfo[i]);
          });
        });
        this.setState({
          s_title: firstRes.data[0].survey_title,
          s_subtitle: firstRes.data[0].subtitle
          //   q_title: res.data[0].question_title,
          //   q_type: res.data[0].type_id
        });
      });
  }

  // METHODS
  submitQuestion = () => {};
  addToQuestions = value => {
    const { questions } = this.state;
    const tempQs = questions.slice();
    tempQs.push(value);
    this.setState({
      questions: tempQs
    });
  };
  updateQuestion = () => {};
  updateSurveyTitle = () => {};
  updateSurveySubTitle = () => {};
  updateQuestionTitle = () => {};

  //methods that edit title, subtitle, questions
  // method that takes the selected questions and passes it down to surveyPreview
  //a methdo that adds the questionsEditCOmponet to state on survey landing. by using the index
  //
  // i need to make an options componetn for the questions. when they add an options push the component to the options objects.
  //
  render() {
    const {
      s_title,
      s_subtitle,
      q_title,
      q_type,
      selectedQuestion,
      questions
    } = this.state;
    console.log('SLP: state', this.state);
    return (
      <div>
        <SurveyPreview
          s_title={s_title}
          s_subtitle={s_subtitle}
          q_title={q_title}
          q_type={q_type}
          selectedQuestion={selectedQuestion}
          questions={questions}
        />

        <EditContainer
          s_title={s_title}
          s_subtitle={s_subtitle}
          q_title={q_title}
          q_type={q_type}
          selectedQuestion={selectedQuestion}
          questions={questions}
          addToQuestions={this.addToQuestions}
          updateSurveyTitle={this.updateSurveyTitle}
          updateSurveySubTitle={this.updateSurveySubTitle}
          updateQuestionTitle={this.updateQuestionTitle}
          updateQuestion={this.updateQuestion}
        />
      </div>
    );
  }
}
// function mapStateToProps(reduxState) {
//   let { isAuthenticated, admin, survey, xid } = reduxState;
//   return {
//     isAuthenticated,
//     admin,
//     survey,
//     xid
//   };
// }

// export default connect(
//   mapStateToProps,
//   { setSurvey, setSurveyById }
// )(SurveyLandingPage);
export default SurveyLandingPage;
