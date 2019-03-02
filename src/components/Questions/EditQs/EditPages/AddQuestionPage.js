import React, { Component } from 'react';
import { QuestionDescription } from '../../../Constant/ConstantQuestions';
import newId from '../../../../IdGenerator/idGenerator';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import { FlexBox } from '@material-ui/core/systems';

const menuStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around'
  // backgroundColor: 'aqua'
};

export default class AddQuestionPage extends Component {
  addSingleLine = () => {
    return {
      question_id: newId(),
      type_id: 2,
      question_title: 'Untitled',
      options: [{ content: 'placeholder', options_id: newId() }]
    };
  };
  addMultiLine() {
    return {
      question_id: newId(),
      type_id: 3,
      question_title: 'Untitled',
      options: [{ content: 'placeholder', options_id: newId() }]
    };
  }
  addMultipleChoice() {
    return {
      question_id: newId(),
      type_id: 4,
      question_title: 'Select a choice',
      options: [
        {
          content: 'First Choice',
          options_id: newId()
        },
        {
          content: 'Second Choice',
          options_id: newId()
        },
        {
          content: 'Third Choice',
          options_id: newId()
        }
      ]
    };
  }
  addCheckBox() {
    return {
      question_id: newId(),
      type_id: 5,
      question_title: 'Select a choice',
      options: [
        {
          content: 'First Choice',
          options_id: newId()
        },
        {
          content: 'Second Choice',
          options_id: newId()
        },
        {
          content: 'Third Choice',
          options_id: newId()
        }
      ]
    };
  }
  addDropDown() {
    return {
      question_id: newId(),
      type_id: 1,
      question_title: 'Select a choice',
      options: [
        {
          content: 'First Choice',
          options_id: newId()
        },
        {
          content: 'Second Choice',
          options_id: newId()
        },
        {
          content: 'Third Choice',
          options_id: newId()
        }
      ]
    };
  }
  render() {
    // this is coming from the EditContainer component
    const { addToQuestions } = this.props;

    console.log('add question page', this.props);
    return (
      // display='flex' flexDirection='column'

      <div>
        <Typography color='primary' component='h1'>
          <h1>Add Question</h1>
        </Typography>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            alignItems: 'center',
            border: '1px solid lightGrey',
            paddingTop: '5%',
            paddingBottom: '5%'
          }}
        >
          <Button
            variant='contained'
            size='small'
            color='primary'
            onClick={() => addToQuestions(this.addSingleLine())}
          >
            Single Line Text
          </Button>
          <br />
          <Button
            variant='contained'
            size='small'
            color='primary'
            onClick={() => addToQuestions(this.addMultiLine())}
          >
            Multi-Line Text
          </Button>
          <br />
          <Button
            variant='contained'
            size='small'
            color='primary'
            onClick={() => addToQuestions(this.addMultipleChoice())}
          >
            Multiple Choice
          </Button>
          <br />
          <Button
            variant='contained'
            size='small'
            color='primary'
            onClick={() => addToQuestions(this.addCheckBox())}
          >
            CheckBox
          </Button>
          <br />
          <Button
            variant='contained'
            size='small'
            color='primary'
            onClick={() => addToQuestions(this.addDropDown())}
          >
            Dropdown
          </Button>
        </div>
      </div>
    );
  }
}

{
  /* <h1>AddQuesionPage</h1>
        <h4>Single Line</h4>
        <h4>Multi Line</h4>
        <h4>Multiple Choice</h4>
        <h4>CheckBoxes</h4>
        <h4>Dropdown</h4> */
}
