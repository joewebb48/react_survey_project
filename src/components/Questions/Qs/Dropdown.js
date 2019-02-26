import React, { Component } from 'react';

export default class Dropdown extends Component {
  render() {
    const { question_title, question_id } = this.props.question;
    const { type, selectedQuestion } = this.props;

    const mappedOptions = this.props.options
      ? this.props.options.map((option, i) => {
          return <option key={i}>{option.content}</option>;
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
        <select>{mappedOptions}</select>
      </div>
    );
  }
}
