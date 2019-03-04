import React, { Component } from 'react';
import { InitQuestions } from '../Constant/ConstantQuestions';
import EditContainer from '../containers/EditContainer';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import SurveyPreview from '../Survey/SurveyPreview/SurvayPreview';
import { connect } from 'react-redux';
import { updateQuestions } from '../../redux/reducer';
import Paper from '@material-ui/core/Paper';

const paperStyle = {
  // height: '%',
  width: '55%',
  margin: '7%',
  textAlign: 'center',
  display: 'inline-block'
};
const editPaperStyle = {
  // height: '750px',
  width: '35%',
  margin: '7%',
  textAlign: 'center',
  display: 'inline-block'
};

class SurveyLandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      s_title: '',
      s_subtitle: '',
      question_title: '',
      selectedQuestion: 0,
      selectedQuestionObject: {},
      questions: []
    };
  }

  componentDidMount() {
    axios
      .get(`/api/getFullSurvey/${this.props.match.params.surveyId}`)
      .then(firstRes => {
        console.log('firstRes', firstRes.data);
        this.setState({
          questions: firstRes.data,
          s_title: firstRes.data[0].surveyInfo[0].title,
          s_subtitle: firstRes.data[0].surveyInfo[0].subtitle
        });
      })
      .catch(err => {
        console.log('axios.get options', err);
      });
  }
  addToQuestions = value => {
    console.log('value', value);
    const { survey_id } = this.props.match.params.surveyId;
    const { questions } = this.state;
    // const { questions_title: title } = this.state.question;

    const tempQs = questions.slice();
    tempQs.push(value);
    axios
      .post(`/api/question/${this.props.match.params.surveyId}`, value)
      .then(response => {
        console.log('we comin back bruh', response.data);
      });
    console.log('tt', tempQs);
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
  deleteQuestion = id => {
    const { options } = this.state;
    console.log(id);
    axios.delete(`/api/deleteQuestion/${id}`).then(res => {
      console.log('please dont quit on me');
      // this.setState({
      //   options: { ...options }
      // });
    });
  };
  addToOptions = options => {
    const { questions } = this.state;
    console.log('add to options method', options);
    // let newArr = this.state.questions;
    this.setState({
      questions: [...questions, options]
    });
    console.log('add to options state', this.state.questions);
  };
  render() {
    console.log('SLP state questions:', this.state.questions);
    // console.log('SLP props:', this.props);
    const {
      s_title,
      s_subtitle,
      selectedQuestionObject,
      questions
    } = this.state;
    return this.props.isAuthenticated ? (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around'
          // backgroundColor: 'light-grey'
        }}
      >
        <Paper className='surveyLandingPaper' id='paper'>
          <SurveyPreview
            s_title={s_title}
            s_subtitle={s_subtitle}
            selectedQuestion={this.activeQuestion}
            questions={questions}
          />
        </Paper>

        <Paper className='surveyLandingPaper' id='paper'>
          <EditContainer
            className='editContainer'
            s_title={s_title}
            s_subtitle={s_subtitle}
            selectedQuestionObject={selectedQuestionObject}
            deleteQuestion={this.deleteQuestion}
            questions={questions}
            addToQuestions={this.addToQuestions}
            updateSurveyTitle={this.updateSurveyTitle}
            updateSurveySubTitle={this.updateSurveySubTitle}
            updateQuestionTitle={this.updateQuestionTitle}
            updateQuestion={this.updateQuestion}
            saveChangesKeyPress={this.saveChangesKeyPress}
            saveChanges={this.saveChanges}
            addToOptions={this.addToOptions}
            // addNewOption={this.addNewOption}
            // deleteOption={this.deleteOption}
          />
        </Paper>
      </div>
    ) : (
      <Redirect to='/login' />
    );
  }
}
function mapStateToProps(reduxState) {
  let { isAuthenticated, admin, questions } = reduxState;
  return {
    questions,
    isAuthenticated,
    admin
  };
}
export default connect(
  mapStateToProps,
  { updateQuestions }
)(SurveyLandingPage);
