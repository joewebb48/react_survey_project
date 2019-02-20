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
      admin_id: '',
      title: 'A Testing Title',
      subtitle: 'Subtitles are cool i guess',
      date: '0-0-0',
      isActive: null
    };
  }

  handleChange = e => {
    let { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  handleClick = () => {
    const { title, subtitle, date, isActive } = this.state;
    const { admin_id: id } = this.props.admin;
    const passIn = { id, title, subtitle, date, isActive };
    axios.post(`/api/surveys`, passIn).then(response => {
      this.props.setSurvey(response.data);
      this.setState({
        admin_id: '',
        title: '',
        subtitle: '',
        date: '',
        isActive: true
      });
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
