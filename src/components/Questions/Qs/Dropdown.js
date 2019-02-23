import React, { Component } from 'react';

export default class Dropdown extends Component {
  render() {
    const { question_title } = this.props.question;

    const mappedOptions = this.props.options
      ? this.props.options.map((option, i) => {
          return <option key={i}>{option.content}</option>;
        })
      : '';
    return (
      <div>
        <div>
          <h1>{question_title}</h1>
        </div>
        <select>{mappedOptions}</select>
      </div>
    );
  }
}
