import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Button from '@material-ui/core/Button';

import axios from 'axios';

export default class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newQuestionTitle: ''
    };
  }
  handleChange = value => {
    this.setState({
      newQuestionTitle: value
    });
  };
  editQuestionTitle = title => {
    console.log('title', title);
    const { question_id } = this.props.question;
    axios.put(`/api/editQuestionTitle/${question_id}`, { title }).then(res => {
      console.log('edit question res', res.data);
    });
  };
  render() {
    console.log('text editor', this.props);
    const {
      options,
      questionTitle,
      updateQuestion,
      updateQuestionTitle
    } = this.props;
    const {
      question_id,
      question_title,
      subtitle,
      type_id
    } = this.props.question;
    return (
      <div>
        <Card>
          <CardContent>
            <h4>{questionTitle}</h4>
            <label>Edit Question Title</label>
            <br />
            <TextField
              id='standard-name'
              margin='normal'
              type='text'
              value={options.content}
              onChange={e => this.handleChange(e.target.value)}
            />
            <br />
          </CardContent>
          <br />
          <Button
            style={{ margin: '15px' }}
            variant='contained'
            size='small'
            color='primary'
            onClick={() => this.editQuestionTitle(this.state.newQuestionTitle)}
          >
            Save Title Edit
          </Button>
        </Card>
      </div>
    );
  }
}
