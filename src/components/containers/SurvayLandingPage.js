import React, { Component } from 'react';
import { InitQuestions } from '../Constant/ConstantQuestions';
import EditContainer from '../containers/EditContainer';
import axios from 'axios';
import SurveyPreview from '../Survey/SurveyPreview/SurvayPreview';
import { connect } from 'react-redux';
import { updateQuestions } from '../../redux/reducer';

class SurveyLandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      s_title: '',
      s_subtitle: '',
      question_title: '',
      options: [],
      selectedQuestion: 0,
      selectedQuestionObject: {},
      questions: []
    };
  }
  componentDidMount() {
    console.log('does this crap work');
    axios
      .get(`/api/survey/${this.props.match.params.surveyId}`)
      .then(firstRes => {
        console.log('firstRes', firstRes.data);
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
          console.log('second res', secondRes);
          const optionInfo = [];
          secondRes.forEach((item, i) => {
            optionInfo.push(item.data);
          });
        });

        this.setState({
          s_title: firstRes.data[0].survey_title,
          s_subtitle: firstRes.data[0].subtitle
        });
      });
  }
  addToQuestions = value => {
    console.log('value', value);
    const { survey_id } = this.props.match.params.surveyId;
    const { questions } = this.state;
    const tempQs = questions.slice();
    tempQs.push(value);
    axios
      .post(`/api/question/${this.props.match.params.surveyId}`, value)
      .then(response => {
        console.log('we comin back bruh', response.data);
      });
    this.setState({
      questions: tempQs
    });
  };

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
    const { s_title, s_subtitle } = this.state;
    const newTitleandSubtitle = { s_title, s_subtitle };
    if (e.key === 'Enter') {
      axios
        .put(`/api/saveSurveyChanges/${surveyId}`, newTitleandSubtitle)
        .then(res => {
          console.log('at least we came back');
        });
    }
  };
  saveChanges = e => {
    const { surveyId } = this.props.match.params;
    const { s_title, s_subtitle } = this.state;
    const newTitleandSubtitle = { s_title, s_subtitle };
    axios
      .put(`/api/saveSurveyChanges/${surveyId}`, newTitleandSubtitle)
      .then(res => {
        console.log('at least we came back');
      });
  };
  updateQuestionTitle = (question_id, content) => {
    axios.put(`/api/updateQuestionTitle/${question_id}`, content).then(res => {
      console.log('update Q title Response after axios');
    });
  };
  activeQuestion = value => {
    this.setState({
      selectedQuestionObject: value
    });
  };

  render() {
    console.log('SLP state:', this.state);
    const {
      s_title,
      s_subtitle,
      selectedQuestionObject,
      questions
    } = this.state;
    return (
      <div>
        <SurveyPreview
          s_title={s_title}
          s_subtitle={s_subtitle}
          selectedQuestion={this.activeQuestion}
          questions={questions}
        />

        <EditContainer
          s_title={s_title}
          s_subtitle={s_subtitle}
          selectedQuestionObject={selectedQuestionObject}
          questions={questions}
          addToQuestions={this.addToQuestions}
          updateSurveyTitle={this.updateSurveyTitle}
          updateSurveySubTitle={this.updateSurveySubTitle}
          updateQuestionTitle={this.updateQuestionTitle}
          updateQuestion={this.updateQuestion}
          saveChangesKeyPress={this.saveChangesKeyPress}
          saveChanges={this.saveChanges}
        />
      </div>
    );
  }
}
function mapStateToProps(reduxState) {
  return {
    questions: reduxState.questions
  };
}
export default connect(
  mapStateToProps,
  { updateQuestions }
)(SurveyLandingPage);
