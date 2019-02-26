import React, { Component } from 'react';
import QuestionListContainer from '../../Questions/QuestionListContainer';

export default class SurveyPreview extends Component {
  render() {
    const { s_title, s_subtitle, questions } = this.props;
    const { selectedQuestion } = this.props;

    return (
      <div className='survey_preview'>
        <div>
          <header>
            <h1>{s_title}</h1>
            <h6>{s_subtitle}</h6>
          </header>
          <hr />
          <QuestionListContainer
            selectedQuestion={selectedQuestion}
            questions={questions}
          />
          <hr />
        </div>
      </div>
    );
  }
}
