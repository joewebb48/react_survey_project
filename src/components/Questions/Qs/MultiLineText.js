import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

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
          <TextField
            id='outlined-textarea'
            placeholder={`Content...`}
            // label='Content...'
            // placeholder='Placeholder'
            InputProps={{
              readOnly: true
            }}
            margin='normal'
            variant='outlined'
            // type='textarea'
            className='f'
            // placeholder={`Content...`}
            name={question_id}
          />
        </div>
      </div>
    );
  }
}
{
  /* <TextField
          id="outlined-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          className={classes.textField}
          margin="normal"
          variant="outlined"
        /> */
}
