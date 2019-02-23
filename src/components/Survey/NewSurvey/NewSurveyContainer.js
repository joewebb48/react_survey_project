import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { setSurvey } from '../../../redux/reducer';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class NewSurveyContainer extends Component {
  constructor() {
    super();
    this.state = {
      //
      // SURVEY
      admin_id: '',
      survey_title: 'Add Survey Title',
      subtitle: 'Add Survey Subtitle',
      date: '0-0-0',
      isActive: '',
      //
      // TYPE
      type: null,
      //
      // QUESTIONS
      survey_id: null,
      question_title: 'Add Survey Title',
      type_id: null,
      //
      // OPTIONS
      option_content: 'Option Answer',
      correct: null,
      question_id: null
    };
  }

  handleChange = e => {
    let { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  handleClick = () => {
    const {
      survey_title,
      subtitle,
      date,
      isActive,
      type,
      survey_id,
      questions_title,
      type_id,
      option_content,
      correct,
      question_id
    } = this.state;
    //
    const { admin_id } = this.props.admin;
    const passIn = {
      admin_id,
      survey_title,
      subtitle,
      date,
      isActive,
      type,
      survey_id,
      questions_title,
      type_id,
      option_content,
      correct,
      question_id
    };
    axios.post(`/api/surveys`, passIn).then(response => {
      this.props.setSurvey('make survey response:', response.data);
      console.log(`newSurvey:`, response.data);
      this.setState({
        admin_id: '',
        survey_title: '',
        subtitle: '',
        date: '',
        isActive: true,
        // TYPE
        type: null,
        //
        // QUESTIONS
        survey_id: null,
        question_title: 'Add Question Title',
        type_id: null,
        //
        // OPTIONS
        option_content: 'Add Option Answer.',
        correct: null,
        question_id: null
      });
      console.log('newSurveyRes:', response.data);
      this.props.history.push(`/admin/surveys/${response.data[0].survey_id}`);
    });
  };
  render() {
    return (
      <div>
        <div>Create New Survey</div>
        <button
          className='newSurveyButton'
          onClick={() => {
            this.handleClick();
          }}
          disabled={this.props.isLoading}
        >
          {this.props.isLoading ? 'Loading...' : 'New Survey'}
        </button>
      </div>
    );
  }
}

//createUser

const mapStateToProps = reduxState => {
  let { isAuthenticated, admin } = reduxState;
  return {
    isAuthenticated,
    admin
  };
};
//
export default withRouter(
  connect(
    mapStateToProps,
    { setSurvey }
  )(NewSurveyContainer)
);
