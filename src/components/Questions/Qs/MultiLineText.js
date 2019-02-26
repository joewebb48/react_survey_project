import React, { Component } from 'react';

export default class MultiLineText extends Component {
  render() {
    // console.log('MLT:', this.props);
    const { content, question_id, question_title } = this.props.question;
    // const { type } = this.props;
    const { type, selectedQuestion } = this.props;
    return (
      <div
        onClick={() => {
          selectedQuestion(this.props.question);
        }}
      >
        <h1 className=''>{question_title}</h1>
        <div className='f'>
          <textarea
            type='textarea'
            className='f'
            placeholder={`Wont Access Content :(`}
            name={question_id}
          />
        </div>
      </div>
    );
  }
}
