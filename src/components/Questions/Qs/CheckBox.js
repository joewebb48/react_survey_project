import React, { Component, PropTypes } from 'react';
import CheckBoxOptionField from '../CheckBoxOptionField';

export default class Checkbox extends Component {
  render() {
    // console.log('cb:', this.props);
    // console.log('cbq:', this.props.question);
    // console.log('cbqc:', this.props.question.options);
    const { question_id, question_title, title, options } = this.props.question;
    // const { content, options_id } = this.props.question.options;
    // console.log(this.props.options);

    const mappedOptions = this.props.options
      ? this.props.options.map((option, i) => {
          // console.log('option in checkbox:', option);
          return <CheckBoxOptionField content={option.content} key={i} />;
        })
      : '';
    return (
      <div>
        <div>
          <h1>{question_title}</h1>
        </div>
        {mappedOptions}
        <br />
      </div>
    );
  }
}
