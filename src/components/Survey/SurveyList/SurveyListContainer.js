import React, { Component } from 'react';
import axios from 'axios';
import { setSurveys } from '../../../redux/reducer';
import { connect } from 'react-redux';
import SurveyItem from '../SurveyItem';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import * as contentful from 'contentful';

class SurveyListContainer extends Component {
  onSearchInputChange = event => {
    if (event.target.value) {
      this.setState({ searchString: event.target.value });
    } else {
      this.setState({ searchString: '' });
    }
    this.getSurvey();
  };
  componentDidMount() {
    let { admin_id: id } = this.props;
    axios.get(`/api/surveys/${id}`).then(res => {
      // console.log(666, res.data);
      this.props.setSurveys(res.data);
      // this.setState({
      //   surveys: res.data
      // });
    });
  }
  render() {
    // console.log('surveylistContainer', this.props);
    // const { surveys } = this.state;
    const { surveys } = this.props;
    // console.log('SLP: surveys', surveys);
    // const { survey_id } = this.props.survey;
    return (
      <div>
        {surveys ? (
          <div>
            <TextField
              style={{ padding: 24 }}
              id='searchInput'
              placeholder='Search for Survey'
              margin='normal'
              onChange={this.onSearchInputChange}
            />
            <Grid container spacing={24} style={{ padding: 24 }}>
              {surveys.map((survey, i) => {
                return (
                  <Grid item xs={12} sm={6} lg={4} xl={3} key={survey.id}>
                    <SurveyItem key={i} survey={survey} />
                  </Grid>
                );
              })}
            </Grid>
          </div>
        ) : (
          'No Surveys Found'
        )}
        {/* <ul>
          {surveys.map((survey, i) => {
            return (
              <li key={survey.id}>
                <SurveyItem key={i} survey={survey} />
              </li>
            );
          })}
        </ul> */}
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
