import React, { Component } from 'react';
import MultiChoiceOptionField from '../MultiChoiceOptionField';

export default class MultipleChoice extends Component {
  render() {
    // console.log('Mc:', this.props);
    const { question_title } = this.props.question;

    const mappedOptions = this.props.options
      ? this.props.options.map((option, i) => {
          // console.log('option in checkbox:', option);
          return <MultiChoiceOptionField content={option.content} key={i} />;
        })
      : '';
    return (
      <div>
        <div>
          <h1>{question_title}</h1>
        </div>
        {mappedOptions}
      </div>
    );
  }
}
