import React, { Component } from 'react';
import QuestionListContainer from '../../Questions/QuestionListContainer';

export default class SurveyPreview extends Component {
  render() {
    // console.log('suheader', this.props);
    const {
      s_title,
      s_subtitle,
      q_title,
      q_type,
      selectedQuestion,
      questions
    } = this.props;

    return (
      <div className='survey_preview'>
        {/* {this.props.survey[0] && ( */}
        <form>
          {/* <h1>Survay Preview</h1> */}
          <header>
            {/* <label>Survey Title</label> */}
            <h1>{s_title}</h1>
            {/* <label>Survey Subtitle</label> */}
            <h6>{s_subtitle}</h6>
            {/* <p>{date}</p> */}
          </header>
          <hr />
          <QuestionListContainer
            q_title={q_title}
            q_type={q_type}
            selectedQuestion={selectedQuestion}
            questions={questions}
          />
          <hr />
        </form>
        {/* )} */}
      </div>
    );
  }
}
