import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';

export default class Dropdown extends Component {
  render() {
    const { question_title, question_id } = this.props.question;
    const { type, selectedQuestion } = this.props;

    const mappedOptions = this.props.options
      ? this.props.options.map((option, i) => {
          return (
            <MenuItem placeholder={option.content} key={i}>
              {option.content}
            </MenuItem>
          );
        })
      : '';
    return (
      <form
        onClick={() => {
          selectedQuestion(this.props.question);
        }}
      >
        <FormControl variant='outlined' value='Select Option'>
          <Typography color='primary'>
            <h1>{question_title}</h1>
          </Typography>
          {/* <IconButton aria-label='Delete' label='Delete Survey'>
            <DeleteIcon fontSize='small' />
          </IconButton> */}
          <Select>{mappedOptions}</Select>
        </FormControl>
      </form>
    );
  }
}
