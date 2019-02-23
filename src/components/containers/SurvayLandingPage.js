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
      question_title: '',
      options: [],
      selectedQuestion: 'this will be an found by an ID',
      questions: []
    };
  }
  componentDidMount() {
    console.log('first Qs', this.state.questions);
    axios
      .get(`/api/survey/${this.props.match.params.surveyId}`)
      .then(firstRes => {
        console.log('firstRes.data:', firstRes.data[0]);
        this.setState({
          questions: firstRes.data
        });
        let promises = [];
        firstRes.data.forEach((item, i) => {
          axios.get(`/api/options/${item.question_id}`).then(res => {
            let questions = this.state.questions;
            questions[i].options = res.data;
            this.setState({
              questions: questions
            });
          });
        });
        axios.all(promises).then((secondRes, i) => {
          console.log(secondRes);
          const optionInfo = [];
          secondRes.forEach((item, i) => {
            optionInfo.push(item.data);
            console.log('option Info', optionInfo[i]);
          });
        });

        this.setState({
          s_title: firstRes.data[0].survey_title,
          s_subtitle: firstRes.data[0].subtitle
          //   //   q_title: res.data[0].question_title,
          //   //   q_type: res.data[0].type_id
        });
      });
  }

  // METHODS
  submitQuestion = () => {};
  addToQuestions = value => {
    const { questions } = this.state;
    console.log('qs', questions);
    console.log('qustions on state:', questions);
    const tempQs = questions.slice();
    console.log('value', value.options);
    tempQs.push(value);
    this.setState({
      questions: tempQs
    });
  };
  // const { questions } = this.state;
  // const mappedQuestions = questions.map((question, i) => {
  //   console.log('mappedQs:', question);
  //   return question;
  // });

  // console.log('MQ', mappedQuestions);

  // axios
  //   .post(
  //     `/api/saveAddedQuestions/${this.props.match.params.surveyId}`,
  //     mappedQuestions
  //   )
  //   .then(res => {
  //     console.log(res);
  //   });

  updateQuestion = () => {};

  updateSurveyTitle = value => {
    this.setState({
      s_title: value
    });
  };
  updateSurveySubTitle = value => {
    this.setState({
      s_subtitle: value
    });
  };
  saveChangesKeyPress = e => {
    const { surveyId } = this.props.match.params;
    // console.log(surveyId);
    const { s_title, s_subtitle } = this.state;
    const newTitleandSubtitle = { s_title, s_subtitle };
    if (e.key === 'Enter') {
      console.log('enter button');
      axios
        .put(`/api/saveSurveyChanges/${surveyId}`, newTitleandSubtitle)
        .then(res => {
          console.log('at least we came back', res);
        });
    }
  };
  updateQuestionTitle = () => {};

  render() {
    // console.log('SLP', this.props);
    const { s_title, s_subtitle, selectedQuestion, questions } = this.state;
    return (
      <div>
        <SurveyPreview
          s_title={s_title}
          s_subtitle={s_subtitle}
          selectedQuestion={selectedQuestion}
          questions={questions}
        />

        <EditContainer
          s_title={s_title}
          s_subtitle={s_subtitle}
          selectedQuestion={selectedQuestion}
          questions={questions}
          addToQuestions={this.addToQuestions}
          updateSurveyTitle={this.updateSurveyTitle}
          updateSurveySubTitle={this.updateSurveySubTitle}
          updateQuestionTitle={this.updateQuestionTitle}
          updateQuestion={this.updateQuestion}
          saveChangesKeyPress={this.saveChangesKeyPress}
        />
      </div>
    );
  }
}
export default SurveyLandingPage;
