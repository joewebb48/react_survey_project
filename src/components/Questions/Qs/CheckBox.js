import React, { Component, PropTypes } from 'react';
import CheckBoxOptionField from '../CheckBoxOptionField';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';

export default class Checkbox extends Component {
  render() {
    // console.log('cb:', this.props);
    const { question_id, title, options } = this.props.question;
    const { type } = this.props;
    const { selectedQuestion } = this.props;

    const mappedOptions = this.props.options
      ? this.props.options.map((option, i) => {
          // console.log('option in checkbox:', option);
          return <CheckBoxOptionField content={option.content} key={i} />;
        })
      : '';
    return (
      <div
        onClick={() => {
          selectedQuestion(this.props.question);
        }}
      >
        <div>
          <Typography color='primary'>
            <h1>{title}</h1>
          </Typography>
          {/* <IconButton aria-label='Delete' label='Delete Survey'>
            <DeleteIcon fontSize='small' />
          </IconButton> */}
        </div>
        {mappedOptions}
        <br />
      </div>
    );
  }
}
