import React, { Component, PropTypes } from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';

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
        <Typography color='primary'>
          <h1 className=''>{question_title}</h1>
        </Typography>
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
