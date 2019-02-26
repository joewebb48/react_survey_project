import React, { Component } from 'react';
import MultiChoiceOptionField from '../MultiChoiceOptionField';

export default class MultipleChoice extends Component {
  render() {
    // console.log('Mc:', this.props);
    const { question_title, question_id } = this.props.question;
    const { type, selectedQuestion } = this.props;
    // const { type } = this.props;

    const mappedOptions = this.props.options
      ? this.props.options.map((option, i) => {
          // console.log('option in checkbox:', option);
          return <MultiChoiceOptionField content={option.content} key={i} />;
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
      </div>
    );
  }
}
