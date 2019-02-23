import React, { Component, PropTypes } from 'react';

export default class SingleLineText extends Component {
  render() {
    // console.log('ST:', this.props.question);
    const { content, question_id, question_title } = this.props.question;
    return (
      <div>
        <h1 className=''>{question_title}</h1>
        <div className='f'>
          <input
            type='text'
            className='f'
            placeholder={`Single Line Text...`}
            name={question_id}
          />
        </div>
      </div>
    );
  }
}
