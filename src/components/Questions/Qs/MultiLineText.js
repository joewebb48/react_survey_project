import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';

export default class MultiLineText extends Component {
  render() {
    // console.log('MLT:', this.props);
    const { content, question_id, title } = this.props.question;
    // const { type } = this.props;
    const { type, selectedQuestion } = this.props;
    return (
      <div
        onClick={() => {
          selectedQuestion(this.props.question);
        }}
      >
        <Typography color='primary'>
          <h1 className=''>{title}</h1>
        </Typography>
        {/* <IconButton aria-label='Delete' label='Delete Survey'>
          <DeleteIcon fontSize='small' />
        </IconButton> */}
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
