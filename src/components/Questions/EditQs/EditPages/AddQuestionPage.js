import React, { Component } from 'react';
import { QuestionDescription } from '../../../Constant/ConstantQuestions';
import newId from '../../../../IdGenerator/idGenerator';

export default class AddQuestionPage extends Component {
  addSingleLine = () => {
    return {
      _id: newId(),
      type: 2,
      title: 'Untitled',
      placeholder: ''
    };
  };
  addMultiLine() {
    return {
      _id: newId(),
      type: 3,
      title: 'Untitled',
      placeholder: ''
    };
  }
  addMultipleChoice() {
    return {
      _id: newId(),
      type: 4,
      title: 'Select a choice',
      options: [
        {
          o_id: newId(),
          content: 'First Choice'
        },
        {
          o_id: newId(),
          content: 'Second Choice'
        },
        {
          o_id: newId(),
          content: 'Third Choice'
        }
      ]
    };
  }
  addCheckBox() {
    return {
      _id: newId(),
      type: 5,
      title: 'Select a choice',
      options: [
        {
          o_id: newId(),
          content: 'First Choice'
        },
        {
          o_id: newId(),
          content: 'Second Choice'
        },
        {
          o_id: newId(),
          content: 'Third Choice'
        }
      ]
    };
  }
  addDropDown() {
    return {
      _id: newId(),
      type: 1,
      title: 'Select a choice',
      options: [
        {
          o_id: newId(),
          content: 'First Choice'
        },
        {
          o_id: newId(),
          content: 'Second Choice'
        },
        {
          o_id: newId(),
          content: 'Third Choice'
        }
      ]
    };
  }

  // I MIGHT NEED TO ADD A MTHOD TO THE SURVAYLANDINGPAGE THAT ADDS THESE TO THE QUESTIONS IN STATE???

  render() {
    // this is coming from the EditContainer component
    const { addToQuestions } = this.props;
    console.log(this.props);
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
