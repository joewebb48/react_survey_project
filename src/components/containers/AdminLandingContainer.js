import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import NewSurveyContainer from '../Survey/NewSurvey/NewSurveyContainer';
import SurveyListContainer from '../Survey/SurveyList/SurveyListContainer';

class AdminLanding extends Component {
  render() {
    return this.props.isAuthenticated ? (
      <div>
        <h1>Admin Landing</h1>
        <NewSurveyContainer />
        <h3>List?</h3>
        <SurveyListContainer />
      </div>
    ) : (
      <Redirect to='/login' />
    );
  }
}

function mapStateToProps(reduxState) {
  let { isAuthenticated, admin } = reduxState;
  return {
    isAuthenticated,
    admin
  };
}

export default connect(
  mapStateToProps,
  null
)(AdminLanding);
