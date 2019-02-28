import React, { Component, PropTypes } from 'react';
import TextField from '@material-ui/core/TextField';

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
          <TextField
            id='outlined-read-only-input'
            margin='normal'
            variant='outlined'
            InputProps={{
              readOnly: true
            }}
            type='text'
            className='f'
            placeholder={`Content...`}
            name={question_id}
          />
        </div>
      </div>
    );
  }
}
