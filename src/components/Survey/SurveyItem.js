import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SurveyItem extends Component {
  render() {
    // console.log('SI', this.props);
    let { survey_id: id, title } = this.props.survey;
    return (
      <div>
        <Link to={`/admin/surveys/${id}`}>{title}</Link>
      </div>
    );
  }
}
