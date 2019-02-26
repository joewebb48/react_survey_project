import React, { Component, PropTypes } from 'react';

export default class SingleLineText extends Component {
  render() {
    // console.log('ST:', this.props.question);
    const { question_id, question_title, options } = this.props.question;
    const { type, selectedQuestion } = this.props;
    // const { content } = this.props.question.options[0];
    // const { type } = this.props;
    return (
      <div
        onClick={() => {
          selectedQuestion(this.props.question);
        }}
      >
        <h1 className=''>{question_title}</h1>
        <div className='f'>
          <input
            type='text'
            className='f'
            placeholder={`Cant access content if my life depended on it`}
            name={question_id}
          />
        </div>
      </div>
    );
  }
}
