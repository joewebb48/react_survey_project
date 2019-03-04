import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import NewSurveyContainer from '../Survey/NewSurvey/NewSurveyContainer';
import SurveyListContainer from '../Survey/SurveyList/SurveyListContainer';

import Typography from '@material-ui/core/Typography';
// import SurveyForm from './SurveyForm';

class AdminLanding extends Component {
  render() {
    return this.props.isAuthenticated ? (
      <div>
        <Typography color='primary' component='h1'>
          <h1 className='websiteTitle'>MyEasySurvey.com</h1>
        </Typography>
        <NewSurveyContainer />
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
