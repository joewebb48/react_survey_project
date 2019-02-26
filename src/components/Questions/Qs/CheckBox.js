import React, { Component, PropTypes } from 'react';
import CheckBoxOptionField from '../CheckBoxOptionField';

export default class Checkbox extends Component {
  render() {
    // console.log('cb:', this.props);
    const { question_id, question_title, title, options } = this.props.question;
    const { type } = this.props;
    const { selectedQuestion } = this.props;

    const mappedOptions = this.props.options
      ? this.props.options.map((option, i) => {
          // console.log('option in checkbox:', option);
          return <CheckBoxOptionField content={option.content} key={i} />;
        })
      : '';
    return (
      <div
        onClick={() => {
          selectedQuestion(this.props.question);
        }}
      >
        <div>
          <h1>{question_title}</h1>
        </div>
        {mappedOptions}
        <br />
      </div>
    );
  }
}
