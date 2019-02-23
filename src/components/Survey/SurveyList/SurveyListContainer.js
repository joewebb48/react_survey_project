import React, { Component } from 'react';
import axios from 'axios';
import { setSurveys } from '../../../redux/reducer';
import { connect } from 'react-redux';
import SurveyItem from '../SurveyItem';

class SurveyListContainer extends Component {
  componentDidMount() {
    let { admin_id: id } = this.props;
    axios.get(`/api/surveys/${id}`).then(res => {
      console.log(666, res.data);
      this.props.setSurveys(res.data);
    });
  }
  render() {
    console.log('surveylistContainer', this.props);
    const { surveys } = this.props;
    // const { survey_id } = this.props.survey;
    return (
      <div>
        <ul>
          {surveys.map((survey, i) => {
            return (
              <li key={survey.id}>
                <SurveyItem key={i} survey={survey} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  let { isAuthenticated, admin, surveys } = reduxState;
  return {
    isAuthenticated,
    admin,
    surveys
  };
}
export default connect(
  mapStateToProps,
  { setSurveys }
)(SurveyListContainer);
