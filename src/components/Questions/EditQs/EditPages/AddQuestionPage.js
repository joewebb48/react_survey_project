import React, { Component } from 'react';
import { QuestionDescription } from '../../../Constant/ConstantQuestions';
import newId from '../../../../IdGenerator/idGenerator';

export default class AddQuestionPage extends Component {
  addSingleLine = () => {
    return {
      question_id: newId(),
      type_id: 2,
      question_title: 'Untitled',
      content: 'placeholder...'
    };
  };
  addMultiLine() {
    return {
      question_id: newId(),
      type_id: 3,
      question_title: 'Untitled',
      content: 'placeholder'
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

    // console.log(this.props);
    return (
      <div>
        <h4>Questions</h4>
        {/* DOES THIS FUNCTION WORK?? */}
        <button onClick={() => addToQuestions(this.addSingleLine())}>
          Single Line
        </button>
        <button onClick={() => addToQuestions(this.addMultiLine())}>
          Multi-Line
        </button>
        <button onClick={() => addToQuestions(this.addMultipleChoice())}>
          Multiple Choice
        </button>
        <button onClick={() => addToQuestions(this.addCheckBox())}>
          CheckBox
        </button>
        <button onClick={() => addToQuestions(this.addDropDown())}>
          Dropdown
        </button>
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
